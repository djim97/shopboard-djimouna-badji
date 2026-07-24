import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((err) => {
      if (err.status === 401) {
        router.navigate(['/']);
      } else if (err.status === 403) {
        console.error('Accès non autorisé');
      } else if (err.status === 500) {
        console.error('Erreur serveur — réessayez plus tard');
      }
      return throwError(() => err);
    })
  );
};