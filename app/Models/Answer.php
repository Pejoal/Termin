<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model {
  use HasFactory;

  protected $fillable = ['content', 'value', 'question_id', 'is_correct'];

  protected $casts = [
    'is_correct' => 'boolean',
  ];

  public function question() {
    return $this->belongsTo(Question::class);
  }

}
