<?php

namespace App\Http\Controllers;

use App\Http\Requests\QuestionRequest;
use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller {

  public function index() {
  }

  public function store(QuestionRequest $request) {
    dd($request->all());
  }

  public function update(Request $request, Question $question) {
  }

  public function destroy(Question $question) {
  }
}
