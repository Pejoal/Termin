<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class QuizController extends Controller {
  public function client(Request $request) {
    return Inertia::render('Quiz/Client', [
    ]);
  }

  public function admin(Request $request) {
    return Inertia::render('Quiz/Admin', [
    ]);
  }

}
