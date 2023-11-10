<?php

use App\Http\Controllers\Apps\DashboardController;
use App\Http\Controllers\Apps\PermissionController;
use App\Http\Controllers\Apps\RoleController;
use App\Http\Controllers\Apps\UserController;
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

// route login page
Route::get('/', fn() => inertia('Auth/Login'));

// route apps group
Route::group(['as' => 'apps.', 'prefix' => 'apps', 'middleware' => ['auth']], function(){
    // dashboard route
    Route::get('/dashboard', DashboardController::class)->name('dashboard');
    // permission route
    Route::get('/permissions', PermissionController::class)->name('permissions.index');
    // role route
    Route::resource('/roles', RoleController::class);
    // user route
    Route::resource('/users', UserController::class);
});

require __DIR__.'/auth.php';
