import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/userservice.service';

@Component({
    templateUrl: './Adduser.component.html'
})

export class createuser implements OnInit {
    userForm: FormGroup;
    title: string = "Create";
    userId!: number;
    errorMessage: any;
    cityList: Array<any> = [];

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _userService: UserService, private _router: Router) {
        if (this._avRoute.snapshot.params["id"]) {
            this.userId = this._avRoute.snapshot.params["id"];
        }

        this.userForm = this._fb.group({
            userId: 0,
            name: ['', [Validators.required]],
            gender: ['', [Validators.required]],
            department: ['', [Validators.required]],
            city: ['', [Validators.required]]
        })
    }

    ngOnInit() {

        this._userService.getRoleList().subscribe(
            data => this.cityList = data
        )

        if (this.userId > 0) {
            this.title = "Edit";
            this._userService.getuserById(this.userId)
                .subscribe(resp => this.userForm.setValue(resp)
                    , error => this.errorMessage = error);
        }

    }

    save() {

        if (!this.userForm.valid) {
            return;
        }

        if (this.title == "Create") {
            this._userService.saveuser(this.userForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-user']);
                }, error => this.errorMessage = error)
        }
        else if (this.title == "Edit") {
            this._userService.updateuser(this.userForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-user']);
                }, error => this.errorMessage = error)
        }
    }

    cancel() {
        this._router.navigate(['/fetch-user']);
    }

    get name() { return this.userForm.get('name'); }
    get gender() { return this.userForm.get('age'); }
    get department() { return this.userForm.get('address'); }
    get city() { return this.userForm.get('role'); }
}  