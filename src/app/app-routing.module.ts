import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './Components/first/first.component';
import { SecondComponent } from './Components/second/second.component';
import { PageNoFoundComponent } from './Components/page-no-found/page-no-found.component'
import { EdadGuard } from './Guards/edad.guard';
import { ComproabandoEdadComponent } from "./Components/comproabando-edad/comproabando-edad.component";

const routes: Routes = [
  { path: 'index', component: FirstComponent },
  { path: 'info', component: SecondComponent },
  { path: 'edad', component: ComproabandoEdadComponent, canActivate: [EdadGuard] },
  { path: '', redirectTo: 'index', pathMatch: 'full' }, // redireccion por default a INDEX
  { path: '**', component: PageNoFoundComponent}, // pagina que se muestra si no encuentra ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
