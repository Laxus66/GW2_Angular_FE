import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/UserService/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  emailErrorMessage: string | null = null;
  passwordErrorMessage: string | null = null;

  formSignin = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService,
    private router: Router
  ) {}

  onHandleSubmit() {
    const emailInput = this.formSignin.get('email');
    const passwordInput = this.formSignin.get('password');

    if (
      this.formSignin.valid &&
      emailInput &&
      passwordInput &&
      emailInput.value &&
      passwordInput.value
    ) {
      this.userService.signIn(this.formSignin.value).subscribe((IUser) => {
          console.log(IUser);
          this.router.navigateByUrl('/');
        },
        (error) => {
          if (error.status === 400 && error.error && error.error.messages) {
            if (error.error.messages === 'Email không tồn tại') {
              this.emailErrorMessage = error.error.messages;
              this.passwordErrorMessage = '';
            } else if (error.error.messages === 'Sai mật khẩu') {
              this.emailErrorMessage = '';
              this.passwordErrorMessage = error.error.messages;
            } else {
              this.emailErrorMessage = '';
              this.passwordErrorMessage = 'Đã xảy ra lỗi khi đăng nhập.';
            }
          } else {
            this.emailErrorMessage = '';
            this.passwordErrorMessage = 'Đã xảy ra lỗi khi đăng nhập.';
          }
        }
      );
    } else {
      this.emailErrorMessage = '';
      this.passwordErrorMessage = '';
    }
  }
}
