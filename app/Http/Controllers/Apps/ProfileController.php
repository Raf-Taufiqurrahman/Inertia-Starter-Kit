<?php

namespace App\Http\Controllers\Apps;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class ProfileController extends Controller
{
    /**
     * path
     *
     * @var mixed
     */
    private $path = 'public/avatars/';

    public function index(Request $request)
    {
        // get current user data
        $user = $request->user();

        // render view
        return inertia('Apps/Profile/Index', [
            'user' => $user,
        ]);
    }

    public function update(Request $request)
    {
        // get current user
        $user = $request->user();

        // update user by id
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
        ]);

        // do it when request file
        if($request->file('avatar')){
            // delete old avatar user
            Storage::disk('local')->delete($this->path. basename($user->avatar));

            // get request avatar
            $avatar = $request->file('avatar');

            // store avatar to storage
            $avatar->storeAs($this->path, $avatar->hashName());

            // update avatar user
            $user->update([
                'avatar' => $avatar->hashName(),
            ]);
        }

        // do it when request password is not empty string
        if($request->password != '' || $request->password != null)
            // update password user
            $user->update([
                'password' => bcrypt($request->password),
            ]);

        // render view
        return to_route('apps.dashboard');
    }
}
