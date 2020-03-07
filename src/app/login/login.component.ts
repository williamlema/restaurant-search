import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentialForm: FormGroup;
  showMessage: boolean;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.credentialForm = this.formBuilder.group(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required])
      }
    );
    this.showMessage = false;
  }

  signIn(): void {
    if (this.credentialForm.valid) {
      this.authService.signIn(this.credentialForm.getRawValue()).subscribe(
        () => this.router.navigate(['/home'])
      );
      this.showMessage = false;
    } else {
      this.showMessage = true;
    }
  }

}
