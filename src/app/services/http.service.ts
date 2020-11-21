import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError, map, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { MemberModal } from '../crudapp/member.modal';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class HttpService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  // --------------- CRUD ------------------

  // ------------ GET ALL RECORDS --------------
  public getPost(): Observable<any> {
    return this.http.get<MemberModal>(this.url);
    // return this.http.get<MemberModal>(this.url).pipe(
    //   catchError((error: any) => {
    //     console.log(error);
    //     return of();
    //   }),
    // )
  }

  // ------------ CREATE new records ---------------
  public createPost(url: string, recordData: any): Observable<any> {
    return this.http.post<MemberModal>(url, JSON.stringify(recordData));
    // return this.http.post<MemberModal>(this.url, JSON.stringify(recordData)).pipe(
    //   catchError((error: any) => {
    //     console.log(error);
    //     return of();
    //   }),
    // )
  }

  // ------------ UPDATE Records
  public updatePost(postId, post): Observable<any> {
    debugger;
    return this.http.put(this.url + '/' + postId, post).pipe(
      catchError((error: any) => {
        console.log(error);
        return of();
      })
    )
  }

  // ----------- DELETE Records -----------
  // public deletePost(id): Observable<any> {
  //   return this.http.delete(this.url + '/' + id).pipe(
  //     catchError((error: any) => {
  //       console.log(error);
  //       return of();
  //     })
  //   )
  // }

  deletePost(url: string) {
    return this.http.delete(url)
      // .pipe(catchError(this.handleError));
  }

  // testing method
  Testing() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/345').pipe(catchError(this.handleError));;
  }

}
