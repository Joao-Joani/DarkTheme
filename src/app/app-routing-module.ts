import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sobre } from './core/pages/components/sobre/sobre';
import { Home } from './core/pages/components/home/home';

const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'sobre',
    component: Sobre,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
