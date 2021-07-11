import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  isSubmitted = false;
  authMessage = '';

  constructor(private formBuilder: FormBuilder,
              private auth: AuthService,
              private localStorageService: LocalStorageService,
              private router: Router) { }

  ngOnInit(): void {
    this._initLoginForm();
  }

  private _initLoginForm() {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    this.isSubmitted = true;
    if (this.loginFormGroup.invalid)
    {
      console.log('invalid');
      return;
    }

    this.auth.login(this.loginForm.email.value, this.loginForm.password.value).subscribe(user => {
      this.authMessage = '';
      this.localStorageService.setToken(user.token);
      this.router.navigate(['/']);
    }, (error: HttpErrorResponse) => {
      if (error.status !== 400)
        this.authMessage = 'Internal Server error. Please try again later!';
      else
        this.authMessage = 'Email or password is wrong!';
    });
  }

  get loginForm() {
    return this.loginFormGroup.controls;
  }
}
