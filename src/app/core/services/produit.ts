import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { ProduitDto } from '../models/produit.dto';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  private http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/produits';

  getAll(): Observable<ProduitDto[]> {
    return this.http.get<ProduitDto[]>(this.apiUrl).pipe(
      catchError(() => of([]))
    );
  }

  getById(id: string): Observable<ProduitDto> {
    return this.http.get<ProduitDto>(`${this.apiUrl}/${id}`);
  }
}