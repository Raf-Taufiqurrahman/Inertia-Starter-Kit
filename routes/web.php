<?php

use App\Http\Controllers\Apps\PermissionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', fn() => inertia('Auth/Login'));

Route::get('/apps/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::group(['as' => 'apps.', 'prefix' => 'apps', 'middleware' => ['auth']], function(){
    // permission route
    Route::get('/permissions', PermissionController::class)->name('permissions.index');
});

require __DIR__.'/auth.php';
