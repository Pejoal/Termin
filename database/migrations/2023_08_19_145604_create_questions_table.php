<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  /**
   * Run the migrations.
   */
  public function up(): void {
    Schema::create('questions', function (Blueprint $table) {
      $table->id();
      $table->string('content');
      $table->smallInteger('correct_answer');
      $table->string('photo')->nullable();
      $table->string('video')->nullable();
      $table->enum('type', ['text', 'math', 'photo', 'video'])->default('text');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void {
    Schema::dropIfExists('questions');
  }
};
