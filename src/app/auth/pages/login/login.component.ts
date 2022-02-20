import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {isNullOrUndefined} from "../../../shared/utils";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup
  next = '/';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = formBuilder.group({
      username: [{value: undefined, disabled: false}],
      password: [{value: undefined, disabled: true}]
    })

    this.form.controls['username'].valueChanges.subscribe(value => {
      if (isNullOrUndefined(value)) this.form.controls['password'].disable()
      else this.form.controls['password'].enable();
    })
  }

  login() {
    const {username, password} = this.form.getRawValue();
    this.authService.auth(username, password)
      .subscribe(async () => {
        await this.router.navigateByUrl(decodeURI(this.next))
      }, () =>{
        console.log('erro')
      })
  }
}
