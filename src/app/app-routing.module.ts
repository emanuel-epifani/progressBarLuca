import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ProgressCopiedComponent } from './components/progress-copied/progress-copied.component';
import { ProgressLucaLucaComponent } from './components/progress-luca-luca/progress-luca-luca.component';

const routes: Routes = [
  { path:'', redirectTo:'/progressBar', pathMatch:'full'},
  { path: 'progressBarMia', component: ProgressBarComponent },
  { path: 'progressBarCopied', component: ProgressCopiedComponent},
  { path: 'progressBarLuca', component: ProgressLucaLucaComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
