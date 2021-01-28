import {HttpClient, HttpHeaders, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {catchError, map, tap, retry} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PhpServiceService {

 url: string ="http://localhost:4200/#/web/test.php?id=123";


constructor(private http: HttpClient) {}

  get(): Observable<any> {
    //this.http.get(this.url).subscribe((res:Response)=> console.log(res.json()));
    return this.http.get('./web/test.php', {responseType: 'text'});
  }

handleError(error) {
   let errorMessage = '';
   if (error.error instanceof ErrorEvent) {
     // client-side error
     errorMessage = `Error: ${error.error.message}`;
   } else {
     // server-side error
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   console.log('error: ' + errorMessage);
 }
}
