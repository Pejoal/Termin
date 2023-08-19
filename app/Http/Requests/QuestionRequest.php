<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class QuestionRequest extends FormRequest {
  /**
   * Determine if the user is authorized to make this request.
   */
  public function authorize(): bool {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
   */
  public function rules(): array
  {
    return [
      'content' => 'required|string',
      'answers' => 'required|array|size:4',
      'correctAnswerIndex' => 'required|integer|between:0,3',
      'type' => ['required', 'string', Rule::in(['text', 'math', 'photo', 'video'])],
    ];
  }
}
