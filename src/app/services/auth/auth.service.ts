import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { AuthStatus } from 'src/app/share/auth-status.enum';
import { SignUpInformation } from 'src/app/model/signup-information';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState$ = new BehaviorSubject<AuthStatus>(AuthStatus.NO_SESSION);

  constructor() { }

  signIn(credential: Credential): Observable<boolean> {
    this.authState$.next(AuthStatus.SIGNIN);
    return of(true);
  }

  signUp(signUpInformation: SignUpInformation): Observable<boolean> {
    return of(true);
  }

  signOut(): Observable<boolean> {
    this.authState$.next(AuthStatus.NO_SESSION);
    return of(true);
  }
}
