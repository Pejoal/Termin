<?php

namespace App\Http\Controllers;

use App\Models\Screen;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller {

  public function index() {
    return Inertia::render('Home', [
    ]);
  }

  public function storeHome(Request $request) {
    Screen::where('name', 'home')->first()->update([
      'content' => $request->content,
    ]);
  }

  public function data_protection() {
    return Inertia::render('DataProtection/Index', [
    ]);
  }

  public function storeImprint(Request $request) {
    Screen::where('name', 'imprint')->first()->update([
      'content' => $request->content,
    ]);
  }

  public function imprint() {
    return Inertia::render('Imprint/Index', [
    ]);
  }

  public function storeDataProtection(Request $request) {
    Screen::where('name', 'data_protection')->first()->update([
      'content' => $request->content,
    ]);
  }

}
