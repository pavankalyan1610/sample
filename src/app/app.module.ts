import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MoveItModule } from '@epicq/move-it';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularDraggableModule } from 'angular2-draggable';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MoveItModule,
    AngularDraggableModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
