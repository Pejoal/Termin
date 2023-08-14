<?php

namespace App\Http\Controllers;

use App\Http\Requests\AppointmentRequest;
use App\Models\Appointment;
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

    return Inertia::render('Home', [
      'appointments' => $appointments,
    ]);
  }

  public function reserve(AppointmentRequest $request) {

    $data = $request->merge(['user_id' => auth()->id()])->toArray();

    Appointment::create($data);

    return 'created';
  }
}