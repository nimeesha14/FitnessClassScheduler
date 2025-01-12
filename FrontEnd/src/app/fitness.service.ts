import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fitness } from './fitness.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FitnessService {
  baseUrl: string = 'http://127.0.0.1:5000/';

  constructor(private httpClient: HttpClient) { }

  public addFitness(name: any, trainer: any, category: any, duration: any, capacity: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    const body = {
      name,
      trainer,
      category,
      duration,
      capacity
    };

    return this.httpClient.post<any>(`${this.baseUrl}fitness`, body, { headers })
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  public listFitness() {
    return this.httpClient.get<Fitness[]>(this.baseUrl + 'fitness');
  }

  deleteSFitness(id: any) {
    return this.httpClient.delete(this.baseUrl + 'fitnes/' + id);
  }
  getFitnessById(id: number) {
    return this.httpClient.get<Fitness>(this.baseUrl + 'fitnes/' + id);
  }

  updateFitness(fitness: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put(`${this.baseUrl}fitnes/${fitness.id}`, fitness, { headers });
  }

}