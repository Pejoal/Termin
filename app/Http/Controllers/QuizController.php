<?php

namespace App\Http\Controllers;

use App\Models\Answer;
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

  public function quizByType($type) {
    $questions = Question::where('type', $type)->with('answers', function ($query) {
      $query->inRandomOrder();
    })->inRandomOrder()->get()->map(function ($question) {

      $answers = $question->answers->map(function ($answer) {
        return [
          'id' => $answer->id,
          'content' => $answer->content,
        ];
      });

      return [
        'id' => $question->id,
        'content' => $question->content,
        'photo' => $question->photo,
        'video' => $question->video,
        'answers' => $answers,
      ];
    });
    return Inertia::render('Quiz/Start', [
      "type" => $type,
      "questions" => $questions,
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

  public function submitAnswers(Request $request) {
    $result = 0;
    foreach ($request->all() as $answer) {
      $is_correct = Answer::find($answer['answer_id'])->is_correct;
      if ($is_correct) {
        $result++;
      }
    }
    return $result;
  }
}
