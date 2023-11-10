<?php

namespace App\Http\Controllers\Apps;

use App\Models\User;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // get all users data
            $users = User::query()
            ->with(['roles' => function($query){
                $query->select('name')->with(['permissions' => function($query){
                    $query->select('name');
                }]);
            }])
            ->when($request->search, fn($query) => $query->where('name', 'like', '%'. $request->search . '%'))
            ->latest()
            ->paginate(7)->withQueryString();

        // render view
        return inertia('Apps/Users/Index', [
            'users' => $users,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // get all roles data
        $roles = Role::query()
            ->with('permissions')
            ->orderBy('name')
            ->get();

        // render view
        return inertia('Apps/Users/Create', [
            'roles' => $roles,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // create new user data
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

         // assign a role to user
        $user->assignRole($request->rolesData);

        // render view
        return to_route('apps.users.index');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        // get all roles data
        $roles = Role::query()
            ->with('permissions')
            ->orderBy('name')
            ->get();

        // load relationship
        $user->load(['roles' => function($query){
            $query->select('id', 'name');
        }]);

        // render view
        return inertia('Apps/Users/Edit', [
            'user' => $user,
            'roles' => $roles,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        // update user data by id
       $user->update([
            'name' => $request->name,
            'email' => $request->email,
       ]);

       // do it when password is not empty string or null
       if($request->password !== '' || $request->password !== null)
            // update user password
            $user->update([
                'password' => bcrypt($request->password),
            ]);

       // sync user roles
       $user->syncRoles($request->rolesData);

       // render view
       return to_route('apps.users.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        // delete user data by id
        $user->delete();

        // render view
        return back();
    }
}
