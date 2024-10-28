import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnDestroy {

  loginForm: FormGroup;
  constructor(
    public auth: AuthService,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    // this.imprimirMensaje();
    // this.imprimirMensaje2();
    console.log('constructor login', auth.isLogued);
  }

  ngOnDestroy(): void {
    console.log('destroy login')
  }

  imprimirMensaje() {
    console.log('inicie sesión para continuar');
  }

  imprimirMensaje2() {
    console.log('......');
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log('formulario valido', this.loginForm.value)
      /*   const { email, password } = this.loginForm.value;
      this.authService.loginUser(email, password); */
    }
    else {
      console.log('formulario invalido', this.loginForm)
      alert('revise sus datos');
    }
  }
}
