import { Component, signal } from '@angular/core';
import { Card } from '../../shared/card/card';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  imports: [ReactiveFormsModule, Card, NgClass],
  selector: 'app-register',
  styleUrl: './register.css',
  templateUrl: './register.html',
})
export class Register {

  protected title = signal('Inscription');
  protected footerText = signal('Se connecter');
  protected footerRoute = signal('/login')

  private passwordMatchValidator = (control: AbstractControl) => {
    
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMisMatch: true }
  }

  protected registerForm = new FormGroup({
    mail: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/[!@#$%^&*(),.?":{}|<>_\-+=\\[\]\/;'`~]/)]),
    confirmPassword: new FormControl('', [Validators.required]), 
  }, {
    validators: this.passwordMatchValidator
  }
)

  protected validForm = () => {
    /* Cette fonction gérera l'appel au service d'authentification et la gestion des erreurs. */
    if (this.registerForm.invalid) {
      console.log('...Le formulaire est invalide...')
      return
    }
  }

}
