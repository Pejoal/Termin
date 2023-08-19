<?php

namespace App\Http\Controllers;

use App\Http\Requests\QuestionRequest;
use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller {

  public function index() {
  }

  public function store(Request $request) {
    dd($request->all());
    // $data = $request->validate([
    //   'questionText' => 'required|string',
    //   'answers' => 'required|array|size:4',
    //   'correctAnswerIndex' => 'required|integer|between:0,3',
    // ]);

    // $question = Question::create([
    //   'text' => $data['questionText'],
    //   'correct_answer' => $data['correctAnswerIndex'],
    // ]);

    // foreach ($data['answers'] as $index => $answer) {
    //   Answer::create([
    //     'question_id' => $question->id,
    //     'text' => $answer,
    //     'is_correct' => $index === $data['correctAnswerIndex'],
    //   ]);
    // }
  }

  public function update(Request $request, Question $question) {
  }

  public function destroy(Question $question) {
  }
}
