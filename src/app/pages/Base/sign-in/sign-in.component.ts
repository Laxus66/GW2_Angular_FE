import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  formSignin = this.fb.group(
    {
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    }
  );

  constructor(private fb: FormBuilder, private authServices: AuthService) {}

  onHandleSubmit() {
    if (this.formSignin.valid) {
      this.authServices.signup(this.formSignin.value).subscribe((data) => {
        console.log(data);
      });
    }
  }
}
