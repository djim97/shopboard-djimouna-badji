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

  creer(data: Omit<ProduitDto, 'id' | 'created_at'>): Observable<ProduitDto> {
    return this.http.post<ProduitDto>(this.apiUrl, data);
  }

  mettreAJour(id: string, data: Partial<ProduitDto>): Observable<ProduitDto> {
    return this.http.patch<ProduitDto>(`${this.apiUrl}/${id}`, data);
  }

  supprimer(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}