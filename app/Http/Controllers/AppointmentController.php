<?php

namespace App\Http\Controllers;

use App\Http\Requests\AppointmentRequest;
use App\Services\AppointmentService;
use Carbon\CarbonPeriod;
use Inertia\Inertia;

class AppointmentController extends Controller {
  public function index() {
    $datePeriod = CarbonPeriod::create(now(), now()->addDays(6));

    $appointments = [];

    foreach ($datePeriod as $date) {
      $appointments[] = (new AppointmentService)->generateTimeData($date);
    }

    return Inertia::render('Appointments/Index', [
      'appointments' => $appointments,
    ]);
  }

  public function reserve(AppointmentRequest $request) {
    auth()->user()->appointments()->create($request->toArray());
  }
}