import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {UsernameValidators} from './username.validators';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formSignup = new FormGroup({
    username: new FormControl('', [Validators.required,
                                   Validators.minLength(3), 
                                   Validators.pattern("[a-z]*"),
                                   UsernameValidators.CannotContainSpace]),
    password: new FormControl('', Validators.required),
    
  })

  get formGetUserName()
  {
    return this.formSignup.get('username');
  }

  get formGetPassword()
  {
    return this.formSignup.get('password');
  }

  onSubmit()
  {
    console.log(this.formSignup.value);
  }

  constructor() { }
  ngOnInit() {
  }

}
