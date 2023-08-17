<?php

namespace App\Http\Controllers;

use App\Http\Requests\AppointmentRequest;
use App\Models\Appointment;
use App\Services\AppointmentService;
use Carbon\CarbonPeriod;
use Illuminate\Http\Request;
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

  public function update(Appointment $appointment, Request $request) {
    if (auth()->user()->cannot('update', $appointment)) {
      abort(403); // Forbidden
    }
    $appointment->update($request->all());
  }

  public function cancel(Appointment $appointment) {
    if (auth()->user()->cannot('update', $appointment)) {
      abort(403); // Forbidden
    }
    // $appointment->delete();
    // dd($appointment);
    $appointment->update([
      "status" => "cancelled",
    ]);

  }

}