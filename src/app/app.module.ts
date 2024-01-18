import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { TestingGroundComponent } from './testing-ground/testing-ground.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestingGroundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
