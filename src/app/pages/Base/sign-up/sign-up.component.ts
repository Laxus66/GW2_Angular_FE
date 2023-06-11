import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/UserService/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  emailErrorMessage: string | null = null;

  formSignup = this.fb.group(
    {
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    },
    { validators: this.checkPassword }
  );

  constructor(
    private fb: FormBuilder,
    private userServices: UserServiceService,
    private router: Router
  ) {}

  checkPassword(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password === confirmPassword) return null;
    return { notMatch: true };
  }

  onHandleSubmit() {
    if (this.formSignup.valid) {
      this.userServices.signUp(this.formSignup.value).subscribe((IUser) => {
        console.log(IUser);
      },
      (error) => {
        if (error.status === 400 && error.error && error.error.messages === 'Email đã tồn tại') {
          this.emailErrorMessage = error.error.messages;
        } else {
          this.emailErrorMessage = 'Đã xảy ra lỗi khi đăng ký.';
        }
      }
      );
    }
  }
}
