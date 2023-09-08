<?php

namespace App\Http\Controllers;

use App\Http\Requests\QuestionRequest;
use App\Models\Answer;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

class QuestionController extends Controller {
  public function showByType($type) {
    $questions = Question::where('type', $type)->get();

    return inertia('Questions/Index', [
      'questions' => $questions,
      'type' => $type,
    ]);
  }

  public function store(Request $request) {
    $data = $request->all();
    // dd($data);
    $langs = array_keys(LaravelLocalization::getSupportedLocales());
    $contents = [];
    foreach ($langs as $lang) {
      if (isset($data[$lang]) && isset($data[$lang]['content'])) {
        $contents[$lang] = [
          "content" => $data[$lang]['content'],
        ];
      }
    }
    $question = Question::create([
      ...$contents,
      'type' => $data['type'],
    ]);

    dd($question);

    foreach ($data['answers'] as $answer) {
      if ($data['type'] === 'math') {
        Answer::create([
          'question_id' => $question->id,
          'value' => $answer['content'],
          'is_correct' => true,
        ]);
      } else {
        Answer::create([
          'question_id' => $question->id,
          'content' => $answer['content'],
          'is_correct' => $answer['is_correct'],
        ]);
      }
    }

    if ($data['type'] === 'photo' && $request->hasFile('photo')) {
      $request->validate([
        'photo' => ['image', 'mimes:jpeg,png,jpg', 'max:30000'],
      ]);
      $path = $request->file('photo')->store('public/questions/photos');
      $question->photo = Storage::url($path);
      $question->save();
    }

    if ($data['type'] === 'video' && $request->hasFile('video')) {
      $request->validate([
        'video' => ['required', 'mimes:mp4,avi,wmv', 'max:50000'],
      ]);
      $path = $request->file('video')->store('public/questions/videos');
      $question->video = Storage::url($path);
      $question->save();
    }

  }

  public function get(Question $question) {
    $question->load('answers');
    return $question;
  }

  public function update(QuestionRequest $request, Question $question) {
    $question->update([
      'content' => $request->input('content'),
      // 'correct_answer' => $request->input('correctAnswerIndex'),
    ]);

    foreach ($request->input('answers') as $index => $answer) {
      $answerModel = Answer::find($answer['id']);
      if ($question->type === 'math') {
        $answerModel->update([
          'value' => $answer['value'],
          'is_correct' => true,
        ]);
      } else {
        $answerModel->update([
          'content' => $answer['content'],
          'is_correct' => $answer['is_correct'],
        ]);
      }
    }
  }

  public function updatePhoto(Request $request, Question $question) {
    if ($request->hasFile('photo')) {
      $request->validate([
        'photo' => ['required', 'image', 'mimes:jpeg,png,jpg', 'max:30000'],
      ]);
      $path = $request->file('photo')->store('public/questions/photos');
      $question->photo = Storage::url($path);
      $question->save();
    }
  }

  public function updateVideo(Request $request, Question $question) {
    if ($request->hasFile('video')) {
      $request->validate([
        'video' => ['required', 'mimes:mp4,avi,wmv', 'max:50000'],
      ]);
      $path = $request->file('video')->store('public/questions/videos');
      $question->video = Storage::url($path);
      $question->save();
    }
  }

  public function destroy(Question $question) {
    $question->delete();
  }
}
