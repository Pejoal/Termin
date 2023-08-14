<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class QuizController extends Controller
{
    public function index(Request $request) {
      return Inertia::render('Quiz/Index', [
      ]);
    }
}
