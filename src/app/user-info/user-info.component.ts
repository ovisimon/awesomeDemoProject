import {Component, OnInit} from '@angular/core';
import {AuthService} from '../core/auth.service';

import { Router } from '@angular/router';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  email: string;
  password: string;
  errorMessage: string;
  successMessage: string;
  error: {name: string, message: string} = {name: '', message: ''};

  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit() {

  }

  validForm(): boolean {
    if (this.email && this.password) {
      return true;
    }
  }

  onLoginEmail(): void {
    if (this.validForm()) {
      this.authService.loginWithEmail(this.email, this.password)
        .then(() => this.router.navigate(['/user']))
        .catch(_error => {
          this.error = _error;
          this.router.navigate(['/']);
        });
    }
  }

  onSignUp(): void {
    if (this.validForm()) {
      this.authService.signUpWithEmail(this.email, this.password)
        .then(res => {
          console.log(res);
          this.errorMessage = '';
          this.successMessage = 'Your account has been created';
        }, err => {
          console.log(err);
          this.errorMessage = err.message;
          this.successMessage = '';
        })
        .then(() => this.router.navigate(['/user']))
        .catch(_error => {
          this.error = _error;
          this.router.navigate(['/']);
        });
    }
  }

  logout() {
    this.authService.signOut();
  }

}
