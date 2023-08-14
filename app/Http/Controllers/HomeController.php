<?php

namespace App\Http\Controllers;

// use App\Models\MasterSetting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller {

  public function index(Request $request) {
    return Inertia::render('Home', [
    ]);
  }
}
