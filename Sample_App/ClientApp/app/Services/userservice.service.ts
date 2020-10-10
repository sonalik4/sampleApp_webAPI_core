import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {
    myAppUrl: string = "";

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    getRoleList() {
        return this._http.get(this.myAppUrl + 'api/user/GetRoleList')
            .map(res => res.json())
            .catch(this.errorHandler);
    }

    getusers() {
        return this._http.get(this.myAppUrl + 'api/user/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getuserById(id: number) {
        return this._http.get(this.myAppUrl + "api/user/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    saveuser(user) {
        return this._http.post(this.myAppUrl + 'api/user/Create', user)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    updateuser(user) {
        return this._http.put(this.myAppUrl + 'api/user/Edit', user)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    deleteuser(id) {
        return this._http.delete(this.myAppUrl + "api/user/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}  