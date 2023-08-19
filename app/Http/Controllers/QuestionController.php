<?php

namespace App\Http\Controllers;

use App\Http\Requests\QuestionRequest;
use App\Models\Answer;
use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller {
  public function showByType($type) {
    $questions = Question::where('type', $type)->get();

    return inertia('Questions/Index', [
      'questions' => $questions,
    ]);
  }

  public function store(QuestionRequest $request) {
    $data = $request->all();
    $question = Question::create([
      'content' => $data['content'],
      'type' => $data['type'],
      //   'correct_answer' => $data['correctAnswerIndex'],
    ]);

    foreach ($data['answers'] as $index => $answer) {
      Answer::create([
        'question_id' => $question->id,
        'content' => $answer,
        'is_correct' => $index === $data['correctAnswerIndex'],
      ]);
    }
  }

  public function update(Request $request, Question $question) {
  }

  public function destroy(Question $question) {
    $question->delete();
  }
}
