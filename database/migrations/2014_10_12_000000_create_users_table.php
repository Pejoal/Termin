<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('users', function (Blueprint $table) {
      $table->id();
      $table->string('firstname');
      $table->string('lastname')->nullable();
      $table->string('username')->unique();
      $table->enum('gender', ['male', 'female'])->nullable();
      $table->enum('type', ['manager', 'writer', 'user', 'admin', 'super admin'])->default('user');
      $table->string('email')->usnique();
      $table->timestamp('email_verified_at')->nullable();
      $table->string('password')->nullable();
      $table->foreignId('deleted_by')->nullable()->constrained('users');
      $table->string('profile_photo_url')->nullable();
      $table->rememberToken()->nullable();
      $table->softDeletes();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('users');
  }
};
