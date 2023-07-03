import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  users : any[] = []

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

  /**
   * subscribe() is a method used to subscribe to an Observable returned by
   * 'getAllUsers()' method of the 'userService'.
   * 
   * When you subscribe to an Observable, you are essentially saying that 
   * you want to be notified when the Observable emits a value or completes.
   * In this case, the 'getAllUsers()' method is making an HTTP request,
   * which returns an Observable that emits the response data.
   */

  getAllUsers() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data as any[]
      console.log(this.users);
    })
  }
}
