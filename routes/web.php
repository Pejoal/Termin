<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\BusinessHourController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QuizController;
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
  // return Inertia::render('Welcome', [
  //   'canLogin' => Route::has('login'),
  //   'canRegister' => Route::has('register'),
  //   'laravelVersion' => Application::VERSION,
  //   'phpVersion' => PHP_VERSION,
  // ]);
  if (in_array(auth()->user()->type, ['super admin', 'admin'])) {
    return redirect(route('admin.dashboard'));
  } else if (auth()->user()->type === 'client') {
    return redirect(route('home'));
  }
});

require __DIR__ . '/auth.php';

Route::middleware(['auth', 'verified'])->group(function () {

  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
  Route::post('/profile/photo/update', [ProfileController::class, 'updateProfilePhoto'])->name('profile.photo.update');

  // User
  Route::group(['middleware' => 'clients-only'], function () {
    Route::get('/user/profile', [ProfileController::class, 'myProfile'])->name('user.profile.me');
    Route::get('/home', [HomeController::class, 'index'])->name('home');
    Route::get('appointments', [AppointmentController::class, 'index'])->name('appointments.index');
    Route::post('appointment/reserve', [AppointmentController::class, 'reserve'])->name('appointment.reserve');
    Route::get('quiz', [QuizController::class, 'index'])->name('quiz.index');
  });

  // Admin
  Route::group(['middleware' => 'admins-only'], function () {
    Route::get('business-hours', [BusinessHourController::class, 'index'])->name('business_hours');
    Route::post('business-hours', [BusinessHourController::class, 'update'])->name('business_hours.update');
    Route::get('/admin/dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');
  });

});
