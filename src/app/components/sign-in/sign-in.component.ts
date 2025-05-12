import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ErrorsService } from '../../services/errors.service';

@Component({
  selector: 'app-sign-in',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {
  name: string = '';
  lastname: string = '';
  credential: string = '';
  email: string = '';
  password: string = '';
  repeatPassword: string = '';

  loading: boolean = false;

  constructor(
    private toast: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorsService

  ) { }

  ngOnInit(): void { }

  addUser() {
    if (this.name == '' || this.lastname == '' || this.credential == '' || this.email == '' || this.password == '' || this.repeatPassword == '') {
      this.toast.error("Todos los campos son obligatorios", "Error")
      return
    }

    if (this.password != this.repeatPassword) {
      this.toast.warning("Las claves son diferentes", "Error")
      return
    }

    //CREAR EL OBJETO

    const user: User = {
      name: this.name,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      credential: this.credential
    }

    this.loading = true

    this._userService.signIn(user).subscribe({
      next: (v) => {
        console.log(v)
        this.loading = false
        this.toast.success(`Cuenta de ${this.name} ${this.lastname} creado exitosamente`)
        this.router.navigate(['/logIn'])
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.messageError(e)
      },
      complete: () => console.log('complete'),
    })

    /*
        this._userService.signIn(user).subscribe(data => {
          this.loading = false
        }, (event: HttpErrorResponse) => {
          if (event.error.msg) {
            console.log(event.error.msg);
            this.toast.warning(event.error.msg, 'Error')
          } else {
            this.toast.error('Existe un error en el servidor', 'Error')
          }
        })
      */
  }
}
