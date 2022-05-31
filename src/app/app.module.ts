import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressCopiedComponent } from './components/progress-copied/progress-copied.component';
import { ProgressLucaLucaComponent } from './components/progress-luca-luca/progress-luca-luca.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressCopiedComponent,
    ProgressLucaLucaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
