import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { CounterComponent } from './components/counter/counter.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { TaskPageComponent } from './pages/task-page/task-page.component';
import { ImageuploadComponent } from './components/imageupload/imageupload.component';
import { TodolistComponent } from './components/todolist/todolist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductPageComponent,
    NavbarComponent,
    InterpolationComponent,
    CounterComponent,
    UserdetailsComponent,
    TaskPageComponent,
    ImageuploadComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
