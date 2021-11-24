<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            // 'avatar' => $this->avatar,
            'username' => $this->username,
            'name' => $this->name,
            'lastname' => $this->lastname,
            'email' => $this->email,
            // 'phone' => $this->phone,
            // 'birthdate' => $this->birthdate,
            // 'emails' => EmailResource::collection($this->emails),
            // 'phones' => PhoneResource::collection($this->phones),
            // 'identificationType' => CatalogueResource::make($this->identificationType),
            // 'sex' => CatalogueResource::make($this->sex),
            // 'gender' => CatalogueResource::make($this->gender),
            // 'bloodType' => CatalogueResource::make($this->bloodType),
            // 'ethnicOrigin' => CatalogueResource::make($this->ethnicOrigin),
            // 'civilStatus' => CatalogueResource::make($this->civilStatus),
            // 'email_verified_at' => $this->email_verified_at,
            // 'password_changed' => $this->password_changed,
        ];
    }
}
