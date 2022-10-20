import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailEleveComponent } from './detail-eleve/detail-eleve.component';
import { EleveComponent } from './eleve/eleve.component';

const routes: Routes = [
  {path: 'eleves', component: EleveComponent},
  {path: 'eleve/:id', component: DetailEleveComponent},
  {path: '', redirectTo: 'eleves', pathMatch:  'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
