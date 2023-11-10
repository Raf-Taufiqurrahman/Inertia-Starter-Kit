<?php

namespace App\Http\Controllers\Apps;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;
use App\Http\Resources\Permission\PermissionResource;
use App\Http\Resources\Role\RoleResource;
use App\Http\Resources\Role\SingleDataResource;
use Spatie\Permission\Models\Permission;

class RoleController extends Controller
{
    /**
     * __construct
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('permission:roles-access')->only('index');
        $this->middleware('permission:roles-create')->only('create');
        $this->middleware('permission:roles-update')->only('edit');
        $this->middleware('permission:roles-delete')->only('destroy');
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // get all roles data
        $roles = Role::query()
            ->with(['permissions' => function($query){
                $query->select('name')->orderBy('name');
            }])
            ->when($request->search, fn($query) => $query->where('name', 'like', '%'. $request->search .'%'))
            ->latest()
            ->paginate(7);

        // render view
        return inertia('Apps/Roles/Index', [
            'roles' => $roles,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // get all permissions data
        $permissions = Permission::query()
            ->orderBy('name')
            ->get();

        // render view
        return inertia('Apps/Roles/Create',[
            'permissions' => PermissionResource::collection($permissions),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // validate request
        $request->validate([
            'name' => 'required|unique:roles',
            'permissions' => 'required|array|min:1'
        ]);

        // create new a role
        $role = Role::create([
            'name' => $request->name,
        ]);

        // assign role to permissions
        $role->givePermissionTo($request->permissions);

        // render view
        return to_route('apps.roles.index');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Role $role)
    {
        // get all permissions data
        $permissions = Permission::query()
        ->orderBy('name')
        ->get();

        // render view
        return inertia('Apps/Roles/Edit',[
            'permissions' => PermissionResource::collection($permissions),
            'role' => new RoleResource($role),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Role $role)
    {
        // validate request
        $request->validate([
            'name' => 'required|unique:roles,name,'. $role->id,
            'permissions' => 'required|array|min:1'
        ]);

        // update role data by id
        $role->update([
            'name' => $request->name
        ]);

        // sync role permissions
        $role->syncPermissions($request->permissions);

        // render view
        return to_route('apps.roles.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Role $role)
    {
        // delete role data by id
        $role->delete();

        // return view
        return back();
    }
}
