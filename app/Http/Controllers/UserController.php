<?php

namespace App\Http\Controllers;

use App\Http\Requests\Users\DestroyUserRequest;
use App\Http\Requests\Users\StoreUserRequest;
use App\Http\Requests\Users\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    function __construct()
    {
        $this->middleware('permission:index-user|store-user|update-user|destroy-user', ['only' => ['index', ' show']]);
        $this->middleware('permission:store-user', ['only' => ['store']]);
        $this->middleware('permission:update-user', ['only' => ['update']]);
        $this->middleware('permission:destroy-user', ['only' => ['destroy', 'destroys']]);
    }

    public function index()
    {
        $users = User::get();
        return response()->json(
            [
                'data' => $users,
                'summary' => 'consulta exitosa',
                'detail' => '',
                'code' => '200'
            ]
        );
    }
    ///

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUserRequest $request)
    {
        $users = new User();
        $users->name = $request->input('name');
        $users->dni = $request->input('dni');
        $users->phone = $request->input('phone');
        $users->password = $request->input('password');

        $users->save();


        return (new UserResource($users))
            ->additional([
                'msg' => [
                    'summary' => 'usuario creado',
                    'detail' => '',
                    'code' => '200'
                ]
            ]);
    }

    /**
     * Display the specified resource.
     * @param \App\Models\Client $client
     * 
     * @return ClientResource
     * 
     */
    public function show(User $user)
    {
        return (new UserResource($user))
            ->additional([
                'msg' => [
                    'summary' => 'success',
                    'detail' => 'consulta exitosa',
                    'code' => '200'
                ]
            ]);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserRequest $request, User $users)
    {
        $users->dni = $request->input('dni');
        $users->name = $request->input('name');
        $users->phone = $request->input('phone');
        $users->password = $request->input('password');


        $users->save();



        return (new UserResource($users))
            ->additional([
                'msg' => [
                    'summary' => 'usuario actualizada',
                    'detail' => '',
                    'code' => '200'
                ]
            ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($user)
    {
        $user = User::find($user);
        $user->delete();
        return (new UserResource($user))
            ->additional([
                'msg' => [
                    'summary' => 'usuario eliminado',
                    'detail' => '',
                    'code' => '200'
                ]
            ]);
    }
    public function destroys(DestroyUserRequest $request)
    {
        User::destroy($request->input('ids'));

        return (new UserResource($request))
            ->additional([
                'msg' => [
                    'summary' => 'eliminado exitosa',
                    'detail' => '',
                    'code' => '200'
                ]
            ]);
    }
}
