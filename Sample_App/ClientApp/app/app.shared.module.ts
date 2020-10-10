import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchuserComponent } from './components/fetchuser/fetchuser.component'
import { createuser } from './components/adduser/Adduser.component'
import { UserService } from './services/userservice.service';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        FetchuserComponent,
        createuser 
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'fetch-user', component: FetchuserComponent },
            { path: 'register-user', component: createuser },
            { path: 'user/edit/:id', component: createuser },

            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [UserService] 
})
export class AppModuleShared {
}
