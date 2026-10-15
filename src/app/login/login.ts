import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {

  protected loginForm = new FormGroup({
    mail: new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', Validators.required)
  })

  protected validForm = () => {
    if (this.loginForm.invalid) {
      console.log('...Le formulaire est invalide...')
      return
    }
  }
}
