<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // get all permissions data
        $permissions = Permission::all();

        // create admin role
        $role = Role::create(['name' => 'admin']);

        // assign a permissions to a role
        $role->givePermissionTo($permissions);
    }
}
