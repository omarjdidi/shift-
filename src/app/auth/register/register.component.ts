import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private _user: UserService, private router: Router) {
    this.registerForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      repeatpassword: new FormControl('', [Validators.required])
    });
  }

  createAccount() {
    if (this.registerForm.value.password !== this.registerForm.value.repeatpassword) {
      Swal.fire({
        title: "Passwords do not match!",
        icon: "error",
        confirmButtonText: "OK"
      });
      return;
    }

    this._user.register(this.registerForm.value).subscribe({
      next: (res) => {
        Swal.fire({
          title: "Registration successful!",
          icon: "success",
          confirmButtonText: "OK"
        });
        this.router.navigate(['/login']);
      },
      error: (err) => {
        Swal.fire({
          title: "Registration failed!",
          text: err.error.message || "Please try again.",
          icon: "error",
          confirmButtonText: "OK"
        });
      }
    });
  }
}
