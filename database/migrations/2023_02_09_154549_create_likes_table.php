<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  /**
   * Run the migrations.
   */
  public function up(): void {
    Schema::create('likes', function (Blueprint $table) {
      $table->id();
      $table->morphs('likeable');
      // $table->integer('likeable_id');
      // $table->string('likeable_type');
      $table->foreignId('user_id')->constrained()->onDelete('cascade');
      $table->unique(['user_id', 'likeable_id', 'likeable_type']);
      $table->softDeletes();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void {
    Schema::dropIfExists('likes');
  }
};