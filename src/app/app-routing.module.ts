import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlContant } from './constants/router.contant';

const routes: Routes = [
  {
    path: UrlContant.PANDIT_DASHBOARD_MODULE,
    loadChildren: () =>
      import(
        './feature-modules/pandit-dashboard-module/pandit-dashboard.module'
      ).then((m) => m.PanditDashboardModule),
  },
  {
    path: UrlContant.AUTH_MODULE,
    loadChildren: () =>
      import('./authentication-module/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: UrlContant.USERS_MODULE,
    loadChildren: () =>
      import('./feature-modules/users-module/users.module').then(
        (m) => m.UsersModule
      ),
  },
  {
    path: UrlContant.TEMPLE_MODULE,
    loadChildren: () =>
      import('./feature-modules/temple-module/temple.module').then(
        (m) => m.TempleModule
      ),
  },
  {
    path: UrlContant.FLORIST_MODULE,
    loadChildren: () =>
      import('./feature-modules/florist-module/florist.module').then(
        (m) => m.FloristModule
      ),
  },
  {
    path: UrlContant.CREMATORIUM_MODULE,
    loadChildren: () =>
      import('./feature-modules/crematorium-module/crematorium.module').then(
        (m) => m.CrematoriumModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
