<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider {
  /**
   * Register any application services.
   *
   * @return void
   */
  public function register() {
    //
  }

  /**
   * Bootstrap any application services.
   *
   * @return void
   */
  public function boot() {
    if ($this->app->environment('production')) {
      \URL::forceScheme('https');
    }

    $locales = config('locales');
    Inertia::share([
      'locales' => $locales,
    ]);
  }
}
