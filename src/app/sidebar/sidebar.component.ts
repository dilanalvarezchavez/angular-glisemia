import { Component, OnInit } from '@angular/core';
import { AuthHttpService } from 'app/services/Auth/auth-http.service';
import { AuthService } from 'app/services/Auth/auth.service';




export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Hoja', icon: 'nc-paper', class: '' },
    { path: '/user', title: 'Usuarios', icon: 'nc-single-02', class: '' },
    { path: '/table', title: 'Datos', icon: 'nc-tile-56', class: '' },

];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    isLogged: Boolean = false;
    constructor(private auth: AuthService, private authHtpp: AuthHttpService) { }
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        let currentSesion = this.auth.user.dni;
        // let currentSesion = this.auth.role;


        if (currentSesion == '1754052718') {
            this.isLogged = true
            console.log(this.isLogged)
        }
        else {
            this.isLogged = false
            console.log(this.isLogged)

        }

    }
}
