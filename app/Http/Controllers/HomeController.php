<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller {

  public function index() {
    return Inertia::render('Home', [
    ]);
  }
  
  public function data_protection() {
    return Inertia::render('DataProtection/Index', [
    ]);
  }

  public function imprint() {
    return Inertia::render('Imprint/Index', [
    ]);
  }

}
