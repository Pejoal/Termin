<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Inertia\Inertia;

class AdminController extends Controller {

  // public function __construct() {
  //   $this->middleware('admins-only');
  // }
  public function dashboard() {

    $appointments = Appointment::orderBy('date', 'DESC')->orderBy('time', 'DESC')->get()->map(function ($appointment) {
      return [
        'id' => $appointment->id,
        'requester' => $appointment->user->full_name,
        'date' => $appointment->date,
        'time' => date_format($appointment->time, 'g:i A'),
        'status' => $appointment->status,
        'location' => $appointment->location,
        'notes' => $appointment->notes,
      ];
    });

    $currentDate = now()->format('Y-m-d');

    $upcomingAppointments = $appointments->filter(function ($item) use ($currentDate) {
      return $item['date'] > $currentDate;
    });

    $previousAppointments = $appointments->filter(function ($item) use ($currentDate) {
      return $item['date'] < $currentDate;
    });

    return Inertia::render('Admin/Dashboard', [
      'previousAppointments' => $previousAppointments,
      'upcomingAppointments' => $upcomingAppointments,
    ]);
  }
}
