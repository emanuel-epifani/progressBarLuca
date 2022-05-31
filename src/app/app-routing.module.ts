import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressCopiedComponent } from './components/progress-copied/progress-copied.component';
import { ProgressLucaLucaProvaComponent } from './components/progress-luca-luca copy/progress-luca-luca.component';
import { ProgressLucaLucaComponent } from './components/progress-luca-luca/progress-luca-luca.component';

const routes: Routes = [
  { path:'', redirectTo:'/progressBar', pathMatch:'full'},
  { path: 'progressBarLucaProva', component: ProgressLucaLucaProvaComponent},
  { path: 'progressBarLuca', component: ProgressLucaLucaComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
