<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

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


    $locales = collect(LaravelLocalization::getSupportedLocales())->map(function ($properties, $localeCode) {
      return [
        'code' => $localeCode,
        'native' => $properties['native'],
        'url' => LaravelLocalization::getLocalizedURL($localeCode, null, [], true),
        'emoji' => $properties['emoji'],
      ];
    });
    Inertia::share([
      'locales' => $locales,
      'active_locale_code' => LaravelLocalization::getCurrentLocale(),
    ]);

  }
}
