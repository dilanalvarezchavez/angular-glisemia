import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: 'login'
  }
]
