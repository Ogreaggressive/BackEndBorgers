import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BurgersInterface } from '../interfaces/burgers';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BurgerService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getBurgers(): Observable<BurgersInterface[]>{
    return this.http.get<BurgersInterface[]>(`${this.BASE_URL}/burger`);
  }

  getBurger(id: string): Observable<BurgersInterface>{
    return this.http.get<BurgersInterface>(`${this.BASE_URL}/burger/${id}`);
  }

  createBurger(burger: BurgersInterface): Observable<BurgersInterface> {
    return this.http.post<BurgersInterface>(`${this.BASE_URL}/burger/create`, burger);
  }

  deleteBurger(id: string): Observable<BurgersInterface> {
    console.log(id);
    return this.http.delete<BurgersInterface>(`${this.BASE_URL}/burger/delete?burgerID=${id}`);
  }

  updateBurger(id: string, burger: BurgersInterface): Observable<BurgersInterface> {
    return this.http.put<BurgersInterface>(`${this.BASE_URL}/burger/update?burgerID=${id}`, burger);
  }
}

