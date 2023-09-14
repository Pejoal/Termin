<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller {
  public function dashboard(Request $request) {

    $currentDateTime = new \DateTime();
    $appointments = Appointment::query()
      ->when($request->search, function ($query, $search) {
        $query->whereIn('user_id', $search);
      })->orderBy('date', 'DESC')->orderBy('time', 'DESC')->get()->map(function ($appointment) use ($currentDateTime) {
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

    $users = User::where('type', 'client')->select('id', 'firstname', 'lastname')->get()->map(function ($user) {
      return [
        'id' => $user->id,
        'full_name' => $user->firstname . ' ' . $user->lastname,
      ];
    });

    if ($request->wantsJson()) {
      return response()->json([
        'previousAppointments' => $previousAppointments,
        'upcomingAppointments' => $upcomingAppointments,
        // 'filters' => $request->only(['search']),
      ]);
    }

    return Inertia::render('Admin/Dashboard', [
      // 'filters' => $request->only(['search']),
      'users' => $users,
      'previousAppointments' => $previousAppointments,
      'upcomingAppointments' => $upcomingAppointments,
    ]);
  }

  public function screens() {
    return Inertia::render('Screens/Index', [
    ]);
  }

}
