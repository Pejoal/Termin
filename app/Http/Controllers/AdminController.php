<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Inertia\Inertia;

class AdminController extends Controller {
  public function dashboard() {

    $currentDateTime = new \DateTime();
    $appointments = Appointment::orderBy('date', 'DESC')->orderBy('time', 'DESC')->get()->map(function ($appointment) use ($currentDateTime){
      $dateTimeString = $appointment->date . ' ' . $appointment->time->format('H:i:s');
      $targetDateTime = new \DateTime($dateTimeString);
      $timeDifference = $currentDateTime->diff($targetDateTime);
      $timeDifferenceInSeconds = $timeDifference->s + ($timeDifference->i * 60) + ($timeDifference->h * 3600) + ($timeDifference->d * 86400); 
      if ($timeDifferenceInSeconds < 86400) {
        $more_than_24_hours = false;
      } else {
        $more_than_24_hours = true;
      }
      return [
        "id" => $appointment->id,
        "date" => $appointment->date,
        "requester" => $appointment->user->full_name,
        "time" => $appointment->time->format('H:i'),
        "status" => $appointment->status,
        "location" => $appointment->location,
        "notes" => $appointment->notes,
        "more_than_24_hours" => $more_than_24_hours,
      ];
    });

    $upcomingAppointments = $appointments->filter(function ($appointment) use ($currentDateTime) {
      $dateTimeString = $appointment['date'] . ' ' . $appointment['time'];
      $targetDateTime = new \DateTime($dateTimeString);
      return $targetDateTime > $currentDateTime;
    });
    
    $previousAppointments = $appointments->filter(function ($appointment) use ($currentDateTime) {
      $dateTimeString = $appointment['date'] . ' ' . $appointment['time'];
      $targetDateTime = new \DateTime($dateTimeString);
      return $targetDateTime <= $currentDateTime;
    });

    return Inertia::render('Admin/Dashboard', [
      'previousAppointments' => $previousAppointments,
      'upcomingAppointments' => $upcomingAppointments,
    ]);
  }
}
