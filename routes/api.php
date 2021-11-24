<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PaperController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::prefix('auth')->group(function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    // Route::post('password-forgot', [AuthController::class, 'passwordForgot']);
    // Route::post('user-unlock', [AuthController::class, 'userUnlock']);
    // Route::post('user-unlock', [AuthController::class, 'userUnlock']);
    // Route::post('email-verified', [AuthController::class, 'emailVerified']);
});


Route::apiResource('papers', PaperController::class);

Route::prefix('paper')->group(function () {
    Route::patch('{paper}', [PaperController::class, 'destroy']);
});

Route::apiResource('users', UserController::class);

Route::prefix('user')->group(function () {
    Route::patch('{user}', [UserController::class, 'destroy']);
});

Route::apiResource('roles', RoleController::class);

Route::prefix('role')->group(function () {
    Route::patch('{role}', [RoleController::class, 'destroy']);
});
