<?php

namespace App\Http\Controllers\Apps;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        // get all permissions data
        $permissions = Permission::query()
            ->when($request->search, fn($query) => $query->where('name', 'like', '%'. $request->search . '%'))
            ->latest()
            ->paginate(7)->withQueryString();

        // render view
        return inertia('Apps/Permissions/Index', [
            'permissions' => $permissions
        ]);
    }
}
