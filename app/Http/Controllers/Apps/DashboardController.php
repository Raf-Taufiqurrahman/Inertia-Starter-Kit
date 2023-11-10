<?php

namespace App\Http\Controllers\Apps;

use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;
use Spatie\Permission\Models\Permission;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        // get users data
        $users = User::query()
            ->limit(5)
            ->latest()
            ->get();

        // count all users data
        $users_count = User::count();

        // count all roles data
        $roles_count = Role::count();

        // count all permissions data
        $permissions_count = Permission::count();

        // render view
        return inertia('Apps/Dashboard/Index', [
            'users' => $users,
            'users_count' => $users_count,
            'roles_count' => $roles_count,
            'permissions_count' => $permissions_count
        ]);
    }
}
