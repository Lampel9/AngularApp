import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private baseUrl = 'http://localhost:3000/etudiant'; // URL de l'API JSON Server

  constructor(private _http: HttpClient) {}

  // Ajouter un étudiant
  
  AjouterEtudiant(data: any): Observable<any> {
    return this._http.post(this.baseUrl, data).pipe(
      catchError((error) => {
        console.error('Erreur lors de l\'ajout de l\'étudiant :', error);
        return throwError(error);
      })
    );
  }

  // Récupérer la liste des étudiants
  getEtudiantlist(): Observable<any[]> { // Ajoutez un typage explicite
    return this._http.get<any[]>(this.baseUrl).pipe(
      catchError((error) => {
        console.error('Erreur lors de la récupération de la liste des étudiants :', error);
        return throwError(error);
      })
    );
  }
  // supprime un étudiant
  suprimerEtudiant(id: number): Observable<any> {
    return this._http.delete(`${this.baseUrl}/${id}`).pipe(
      catchError((error) => {
        console.error('Erreur lors de la modification de l\'étudiant :', error);
        return throwError(error);
      })
    );
  }
  // Modifie un étudiant
   modifierEtudiant(id: number, data: any): Observable<any> {
    return this._http.put(`${this.baseUrl}/${id}`, data).pipe(
      catchError((error) => {
        console.error('Erreur lors de la modification de l\'étudiant :', error);
        return throwError(error);
      })
    );
  }


  
}
