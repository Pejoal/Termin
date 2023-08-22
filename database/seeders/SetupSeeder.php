<?php

namespace Database\Seeders;

use App\Models\Comment;
use App\Models\Like;
use App\Models\Reply;
use App\Models\User;
use Illuminate\Database\Seeder;

class SetupSeeder extends Seeder {
  /**
   * Run the database seeds.
   */

  public function run(): void {

    User::create([
      'firstname' => 'Pejoal',
      'lastname' => 'Nagy',
      'username' => 'pejoal',
      'gender' => 'male',
      'email' => 'pejoal.official@gmail.com',
      'email_verified_at' => now(),
      'password' => bcrypt('88888888'),
      'type' => 'super admin',
    ]);

    User::create([
      'firstname' => 'Jane',
      'lastname' => 'Doe',
      'username' => 'jane',
      'gender' => 'female',
      'email' => 'jane.doe@example.com',
      'email_verified_at' => now(),
      'password' => bcrypt('11111111'),
      'type' => 'client',
    ]);

  
  }
}
