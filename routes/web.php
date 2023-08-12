<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\BusinessHourController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', function () {
  // dd(auth()->check()); // return bool
  // return 'This is your multi-tenant application. The id of the current tenant is ' . tenant('id');
  // return Inertia::render('Welcome', [
  //   'canLogin' => Route::has('login'),
  //   'canRegister' => Route::has('register'),
  //   'laravelVersion' => Application::VERSION,
  //   'phpVersion' => PHP_VERSION,
  // ]);
  return redirect(route('home'));
});

require __DIR__ . '/auth.php';

Route::middleware(['auth', 'verified'])->group(function () {

  Route::get('/home', [HomeController::class, 'index'])->name('home');
  
  Route::get('/user/profile', [ProfileController::class, 'myProfile'])->name('user.profile.me');
  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
  Route::post('/profile/photo/update', [ProfileController::class, 'updateProfilePhoto'])->name('profile.photo.update');
  

  Route::get('business-hours', [BusinessHourController::class, 'index']);
  Route::post('business-hours', [BusinessHourController::class, 'update'])->name('business_hours.update');
  Route::get('reserve', [AppointmentController::class, 'index']);
  Route::post('reserve', [AppointmentController::class, 'reserve'])->name('reserve');

});
