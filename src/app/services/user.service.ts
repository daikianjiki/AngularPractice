import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * Services in Angular are used to manage data, perform business logic,
 * communicate with servers or APIs, handle shared state, and provide other 
 * application-specific functionality. They act as a central place to 
 * encapsulate and organize code that is not directly related to the 
 * presentation layer (components) but is necessary for the application's
 * overall functionality.
 * 
 * Angular has a built-in dependency injection (DI) system that manages the
 * creation and injection of service instances. By specifying a service as a
 * dependency in a component's constructor, Angular resolves the dependency and
 * provides an instance of the service to the component. 
 * 
 * Services can be created using the Angular CLI:
 * 
 * ng generate service service-name
 * ng g s service-name
 * ng g s directory-name/service-name
 * 
 * The 'HttpClient' module in Angular provides a powerful and conventient way
 * to make HTTP requests from your Angular application. It is part of the 
 * '@angular/common/http' package, and you can import it by adding
 * 'HttpClientModule' to the 'imports' array of your Angular module.
 * 
 * This module supports various HTTP methods such as GET, POST, PUT,
 * DELETE, etc. You can use these methods to perform CRUD operations.
 * 
 * Also, it returns an Observable for each HTTP request. Observables provide a
 * way to handle asynchronous data and provide powerful features like 
 * cancellation, transformation, error handling etc.
 */
export class UserService {
  
  constructor(private httpClient : HttpClient) { }

  getAllUsers() {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/users")
  }
}
