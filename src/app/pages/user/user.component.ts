import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'app/services/users.service';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
    constructor(private userService: UsersService, private httpClient: HttpClientModule){
    }
    ngOnInit(){

    }
}
