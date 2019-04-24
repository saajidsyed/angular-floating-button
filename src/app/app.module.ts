import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgFloatingActionMenuModule } from 'angular-floating-button';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgFloatingActionMenuModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
