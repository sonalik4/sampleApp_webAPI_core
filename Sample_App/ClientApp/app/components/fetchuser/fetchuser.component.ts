import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/userservice.service'

@Component({
    templateUrl: './fetchuser.component.html'
})

export class FetchuserComponent {
    public userList!: UserData[];

    constructor(public http: Http, private _router: Router, private _userService: UserService) {
        this.getusers();
    }

    getusers() {
        this._userService.getusers().subscribe(
            data => this.userList = data
        )
    }

    delete(userID) {
        var ans = confirm("Do you want to delete customer with Id: " + userID);
        if (ans) {
            this._userService.deleteuser(userID).subscribe((data) => {
                this.getusers();
            }, error => console.error(error))
        }
    }
}

interface UserData {
    UserId: number;
    UserName: string;
    Age: number;
    Address: string;
    Role: string;
}  