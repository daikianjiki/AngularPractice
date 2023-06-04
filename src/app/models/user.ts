/**
 * In Angular, model interfaces are TS interfaces that define the structure and shape of the data
 * objects used within an application. These interfaces serve as contracts that define the properties
 * and their types that a particular data object should have.
 * 
 * Model interfaces play a crucial role in maintaining strong typing and providing a clear definition
 * of the data structures used throughout an Angular application. They help in improving code
 * readability, facilitating code navigation, and enabling early detection of potential errors.
 * 
 * Interfaces in TS enable static type checking. By defining interfaces for data objects,
 * you can leverage the type system to catch errors at compile-time, helping to prevent 
 * runtime issues and improve the reliability of your application. 
 */
export interface User {
    id: number //required constraint of a data object
    username: string
    password: string | number //with ts, you can assign multiple constraints.
    phoneNumber? : number //optional constraint of a data object.
}