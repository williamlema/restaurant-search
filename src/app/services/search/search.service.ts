import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RestarurantBodyList, Restarurant } from 'src/app/model/restaurant';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private SERVICE_NAME:string = 'http://opentable.herokuapp.com/api/restaurants?city='

  constructor(private http: HttpClient) { }

  byCity(city: string): Observable<Array<Restarurant>> {
    return this.http.get<RestarurantBodyList>(`${this.SERVICE_NAME}${city}`)
    .pipe(map(({restaurants}) => restaurants));
  }
}
