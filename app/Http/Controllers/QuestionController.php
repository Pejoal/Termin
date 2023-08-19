<?php

namespace App\Http\Controllers;

use App\Http\Requests\QuestionRequest;
use App\Models\Answer;
use App\Models\Question;

class QuestionController extends Controller {
  public function showByType($type) {
    $questions = Question::where('type', $type)->get();

    return inertia('Questions/Index', [
      'questions' => $questions,
      'type' => $type,
    ]);
  }

  public function store(QuestionRequest $request) {
    $data = $request->all();
    $question = Question::create([
      'content' => $data['content'],
      'type' => $data['type'],
      'correct_answer' => $data['correctAnswerIndex'],
    ]);

    foreach ($data['answers'] as $index => $answer) {
      Answer::create([
        'question_id' => $question->id,
        'content' => $answer,
        'is_correct' => $index === $data['correctAnswerIndex'],
      ]);
    }
  }

  public function get(Question $question) {
    $question->load('answers');
    return $question;
  }

  public function update(QuestionRequest $request, Question $question) {
    // dd($request->input('answers'));
    $question->update([
      'content' => $request->input('content'),
      'correct_answer' => $request->input('correctAnswerIndex'),
    ]);

    foreach ($request->input('answers') as $index => $answer) {
      $answerModel = Answer::find($answer['id']);
      $answerModel->update([
        'content' => $answer['content'],
        'is_correct' => $index === $request->input('correctAnswerIndex'),
      ]);
    }

  }

  public function destroy(Question $question) {
    $question->delete();
  }
}
