import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', loadChildren: './static/home/home.module#HomeModule' },
  { path: 'about', loadChildren: './static/about/about.module#AboutModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
