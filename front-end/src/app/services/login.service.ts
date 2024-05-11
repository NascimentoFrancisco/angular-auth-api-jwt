import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/ogin-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseApiUrl: string = "http://localhost:8000/";

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string){
    return this.httpClient.post<LoginResponse>(this.baseApiUrl+"login/", {email, password}).pipe(
      tap((value)=>{
        sessionStorage.setItem("access", value.access)
      })
    )
  }

  signup(username: string, name: string, email: string, password: string){
    return this.httpClient.post(this.baseApiUrl+"user/", {username, name, email, password});
  }

  logout(){
    sessionStorage.clear()
  }

}
