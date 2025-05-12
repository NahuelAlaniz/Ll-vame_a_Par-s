import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../interfaces/user';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorsService } from '../../services/errors.service';

@Component({
  selector: 'app-login',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = ''
  password: string = ''
  loading: boolean = false

  constructor(
    private _userServices: UserService,
    private toastr: ToastrService,
    private router: Router,
    private _errorService: ErrorsService
  ) { }

  login() {
    if (this.email == '' || this.password == '') {
      this.toastr.error("Todos los campos son obligatorios", "Error")
      return
    }

    //CREAR EL OBJETO

    const user: User = {
      email: this.email,
      password: this.password,
    }

    this.loading = true

    this._userServices.logIn(user).subscribe({
      next: (response: any) => {
        const token = response.token

        console.log(token);

        this.loading = false
        localStorage.setItem('token', token)
        this.toastr.success("", "BIENVENIDO")
        this.router.navigate(['/inicio'])
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false
        this._errorService.messageError(e)
      }
    })
  }
}
