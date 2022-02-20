import { Injectable } from '@angular/core';
import {Observable, of, Subject, tap, throwError} from "rxjs";
import {isNotNullOrUndefined, isNullOrUndefined} from "../shared/utils";
import {environment} from "../../environments/environment";
import {User} from "../shared/domain/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth$: Subject<void> = new Subject();
  private revokeToken$: Subject<void> = new Subject();
  private _token?: string = undefined;

  constructor() { }

  get token(): string | undefined {
    if (isNotNullOrUndefined(this._token)) {
      return this._token;
    }

    const tokenStorage = localStorage.getItem(environment.storage.tokenKey);

    if (isNullOrUndefined(tokenStorage)) {
      return undefined;
    }

    this._token = tokenStorage as string;

    return this._token;
  }

  get onAuth(): Observable<void> {
    return this.auth$.asObservable();
  }

  get onRevokeToken(): Observable<void> {
    return this.revokeToken$.asObservable();
  }

  get authorized(): boolean {
    return isNotNullOrUndefined(this.token);
  }

  auth(user: string, pass: string): Observable<User> {
    if (user != "carlos") {
      return throwError('Login inválido')
    }

    // --- Replace wit Auth user in api ---
    const userFake: User = {
      email: "email@email.com",
      login: "user",
      perfis: ["admin"],
    }

    return (of(userFake) as Observable<User>).pipe(
      tap(user => {
        this.setTokenStorage("token");
        this.setUserStorage(user);
        this.auth$.next();
      })
    )
    // ---
  }

  revokeToken(): void {
    this._token = undefined;
    localStorage.removeItem(environment.storage.tokenKey);
    this.revokeToken$.next();
  }

  private setTokenStorage(token: string): void {
    this._token = token;
    localStorage.setItem(environment.storage.tokenKey, this._token);
  }

  private setUserStorage(user: User): void {
    localStorage.setItem(environment.storage.userKey, JSON.stringify(user));
  }
}
