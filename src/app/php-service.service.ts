import {HttpClient, HttpHeaders, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {catchError, map, tap, retry} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PhpServiceService {

 apiurl: string =""; // ='http://localhost:80/angular/invoice.php?invoiceId=c5ff9e4b-f478-40d0-9892-e9c23c9724dc';


constructor(private http: HttpClient) {}

  //get(): Observable<any> {
    //this.http.get(this.apiurl).subscribe((res:Response)=> console.log(res.json()));
    // return this.http.get(this.apiurl, {responseType: 'json'});
  //}

/* handleError(error) {
   let errorMessage = '';
   if (error.error instanceof ErrorEvent) {
     // client-side error
     errorMessage = `Error: ${error.error.message}`;
   } else {
     // server-side error
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   console.log('error: ' + errorMessage);
 } */

 /* invoiceDetails(
     amount: number): Observable<any> {

     return this.http.get(this.apiurl, {
         params: new HttpParams()
             .set('id', id)
             .set('number', number)
             .set('title', title)
             .set('remittance', remittance)
             .set('ref', ref)
             .set('state', state)
             .set('amount', amount)
             .set('date', date)
             .set('duedate', duedate)
             .set('ct',ct)
             .set('url', url),
         observe: 'response'
     }).pipe(
         map((res: any) => {
             res['playload'] = res;
             return res['playload'];
         })
     );
} */
}

