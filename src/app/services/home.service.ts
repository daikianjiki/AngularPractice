import { Injectable } from '@angular/core';
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
 */
@Injectable({
  providedIn: 'root'
})

export class HomeService {

  constructor() { }
}
