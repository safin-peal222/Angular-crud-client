import { Component } from '@angular/core';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fetch-data';
  users: any;
  remainingUsers: any;
  constructor(private userData: UserDataService) {
    this.getAllData();
  }

  getAllData() {
    this.userData.users().subscribe((data) => {
      this.users = data;
    })
  }

  ngOnInit(): void {
    console.log("calling ngOnInit()::::");
    this.users();
  }
  getUser(data: any) {
    this.userData.saveUser(data).subscribe((result) => {
      console.log(this.users);
    })
  }



  onDelete(id: number) {

    this.userData.deleteUser(id).subscribe(res => {

      this.remainingUsers = this.users.filter((user: any) => user._id !== id);

      this.users = this.remainingUsers;
    })
  }
}
