import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormControlStatus } from 'src/app/helper/form';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
  }

  @HostBinding('class') class = 'h-full';

  signInform: FormGroup = this.fb.group({});
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  password: FormControl = new FormControl('', Validators.required);
  errorMessage: boolean = false;
  processing: boolean = false;
  isDebug: boolean = false;

  isPromotionEnable: boolean = environment.isPromotionEnable;

  ngOnInit(): void {
    this.signInform.addControl('email', this.email);
    this.signInform.addControl('password', this.password);
  }

  login() {
    if (this.isDebug) {
      this.email.setValue('binhhm2009@gmail.com');
      this.password.setValue('Zaq1@wsx');
    }
    if (this.signInform.untouched) {
      this.signInform.markAllAsTouched();
      return;
    }
    if (this.signInform.status === FormControlStatus.VALID) {
      this.processing = true;
    }
  }

  debug() {
    this.isDebug = true;
  }

}
