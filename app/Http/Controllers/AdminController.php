<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class AdminController extends Controller {

  // public function __construct() {
  //   $this->middleware('admins-only');
  // }
  public function dashboard() {
    return Inertia::render('Admin/Dashboard', [
    ]);
  }
}
