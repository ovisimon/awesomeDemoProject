import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import {AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})

export class SignupFormComponent {
  title = 'SignupFormComponent';
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  password: string;
  confirmPassword: string;
  check: boolean;
  showPassword: boolean;
  showConfirm: boolean;

  userForm: FormGroup;
  newUser = true; // to toggle login or signup form
  passReset = false;

  errorMessage = '';
  successMessage: string;
  error: {name: string, message: string} = {name: '', message: ''};
  users: any[];

  database: any = firebase.database();
  ref = this.database.ref('users/');

  constructor(public authService: AuthService, public router: Router, public db: AngularFireDatabase) {
    this.showPassword = false;
  }

  ngOnInit(): void {

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
        .then(this.ref.push({
          uid: this.authService.currentUserId,
          firstname: this.firstName,
          lastName: this.lastName,
          companyName: this.companyName,
          email: this.email
        }))
        .then(() => this.router.navigate(['/user']))
        .catch(_error => {
          this.error = _error;
          this.router.navigate(['/']);
        });
    }
  }

  tooglePassword() {
    this.showPassword = !this.showPassword;
  }

  toogleConfirm() {
    this.showConfirm = !this.showConfirm;
  }

  validForm(): boolean {
    if (this.firstName &&
      this.lastName &&
      this.companyName &&
      this.email &&
      this.password &&
      this.confirmPassword &&
      this.check &&
      this.password == this.confirmPassword) {
      return true;
    } else {
      return false;
    }
  }

  test(): void {
    console.log('this works!');
  }
}

