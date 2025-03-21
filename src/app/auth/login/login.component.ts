import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private _user: UserService, private router: Router) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  login() {
    if (this.loginForm.invalid) {
      Swal.fire({
        title: "Invalid Inputs!",
        text: "Please fill all fields correctly.",
        icon: "error",
        confirmButtonText: "OK"
      });
      return;
    }

    this._user.login(this.loginForm.value).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);

        Swal.fire({
          title: "Login Successful!",
          icon: "success",
          confirmButtonText: "OK"
        });

        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        Swal.fire({
          title: "Login Failed!",
          text: err.error.message || "Invalid email or password.",
          icon: "error",
          confirmButtonText: "OK"
        });
      }
    });
  }
}
