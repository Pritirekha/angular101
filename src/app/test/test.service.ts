import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TestService {
    constructor() {}

    getHello(): string {
        return 'Hello Service';
    }

    saveBook(bookName: string, bookPrice: string, authorName: string) {
        const reqbody = JSON.stringify({ bookName, bookPrice, authorName });
        console.log(reqbody);
        return fetch('http://localhost:8080/addbook', {
            body: reqbody,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });
    }

    viewBooks() {
        return fetch('http://localhost:8080/').then((res) => res.json());
    }
}
