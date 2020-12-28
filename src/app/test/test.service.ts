import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TestService {
    constructor(private http: HttpClient) {}

    getHello(): string {
        return 'Hello Service';
    }

    saveBook(bookName: string, bookPrice: string, authorName: string) {
        const reqbody = { bookName, bookPrice, authorName };
        console.log(reqbody);
        /*return fetch('http://localhost:8080/addbook', {
            body: reqbody,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });*/

        return this.http.post('http://localhost:8080/addbook', reqbody, {
            headers: { 'Content-Type': 'application/json' }
        });
    }

    viewBooks(): Observable<any> {
        return this.http.get('http://localhost:8080/');
    }
}
