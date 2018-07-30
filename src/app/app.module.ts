import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AuthService } from './core/auth.service';
import { UserInfoComponent } from './user-info/user-info.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

const appRoutes: Routes = [
  { path: '', component: SignupFormComponent},
  { path: 'user', component: UserInfoComponent},
  { path: 'signup', component: SignupFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes,
      {enableTracing: false}
      ),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
