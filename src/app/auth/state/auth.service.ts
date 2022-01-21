import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthStore } from './auth.store';

export type Creds = {
  username: string;
  password: string;
};

export type LoginRet = {
  auth_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(creds: Creds) {
    return this.httpClient.post<LoginRet>(environment.loginUrl, creds).pipe(
      tap(ret => this.authStore.update({token: ret.auth_token}))
    );
  }

  logout() {
    this.authStore.reset();
  }

  constructor(
    private authStore: AuthStore,
    private httpClient: HttpClient
  ) { }
}
