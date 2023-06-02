import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
/**
 * In Angular, a router is a module that allows you to manage navigation
 * within your application. It helps you build single-page applications
 * (SPAs) by enabling you to define routes, which are URLs that correspond to 
 * different components or views in your application. 
 * 
 * When you generate a new Angular project, you can also generate a routing ts 
 * file by writing below in the terminal:
 * 
 * ng n {project-name} --routing
 * 
 * Route Configuration: You define routes in your Angular application using the RouterModule.
 * This module provides a set of methods for configuring routes. Each
 * route consists of a URL path and the component that should be displayed 
 * when that path is accessed.
 * 
 * '**' is a wildcard and can be used for any path. In the example below, 
 * I'm using it for a home page, but you should display a 404 not found page.
 * 
 * i.e. routes = [
 *  { path: 'products', component: ProductsPageComponent},
 *  { path: '**', component: HomePageComponent}
 * ];
 * 
 * Route Parameters: Routes can also have parameters that allow you to pass data
 * dynamically. For example, you can define a route like 'products/:id', where
 * :id is a parameter representing a specific product Id. You can access this parameter
 * int eh component associaed with the route and use it to fetch the corresponding data.
 * 
 * Route Guards: Angular's router also provide route guards, which allow you to control
 * access to certain routes based on certain conditions. For example, you can implement
 * an authentication guard to restrict access to certain routes only to authenticated users.
 * 
 * Once you have configured this file, go to app.component.html.
 */


const routes: Routes = [
  { path: '**', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
