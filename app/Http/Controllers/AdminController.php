<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Inertia\Inertia;

class AdminController extends Controller {

  // public function __construct() {
  //   $this->middleware('admins-only');
  // }
  public function dashboard() {

    // dd(Appointment::where('status', 'pending')->get());
    $pendingAppointments = Appointment::where('status', 'pending')->get()->map(function ($appointment) {
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

    return Inertia::render('Admin/Dashboard', [
      'pendingAppointments' => $pendingAppointments,
    ]);
  }
}
