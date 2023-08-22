<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuizController extends Controller {
  public function client(Request $request) {
    $text_questions_count = Question::where('type', 'text')->count();
    $math_questions_count = Question::where('type', 'math')->count();
    $photo_questions_count = Question::where('type', 'photo')->count();
    $video_questions_count = Question::where('type', 'video')->count();
    return Inertia::render('Quiz/Client', [
      'text_questions_count' => $text_questions_count,
      'math_questions_count' => $math_questions_count,
      'photo_questions_count' => $photo_questions_count,
      'video_questions_count' => $video_questions_count,
    ]);
  }

  public function admin(Request $request) {
    $text_questions_count = Question::where('type', 'text')->count();
    $math_questions_count = Question::where('type', 'math')->count();
    $photo_questions_count = Question::where('type', 'photo')->count();
    $video_questions_count = Question::where('type', 'video')->count();

    return Inertia::render('Quiz/Admin', [
      'text_questions_count' => $text_questions_count,
      'math_questions_count' => $math_questions_count,
      'photo_questions_count' => $photo_questions_count,
      'video_questions_count' => $video_questions_count,
    ]);
  }

}
