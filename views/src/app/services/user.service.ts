import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { NewUser } from 'src/app/interfaces/newUser.interface';
import { ConfigService } from '../config.service';
import { from, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  session = false;

  constructor(
    private http: HttpClient,
    private site: ConfigService
  ) { }

  login(data: object) {

  }

  registerUser(user: NewUser) {
    const url = this.site.getApiUrlService() + 'api/v1/rest-auth/registration/';
    const body = user;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(url, body, httpOptions);
  }

  getSesion() {
    return this.session;
  }

}
