import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/produits';

  getAll(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiUrl).pipe(
      catchError(() => of([]))
    );
  }

  getById(id: string): Observable<Produit> {
    return this.http.get<Produit>(`${this.apiUrl}/${id}`);
  }
}