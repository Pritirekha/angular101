import { HttpClient } from '@angular/common/http';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { TestService } from './test.service';

describe('TestService', () => {
    let service: TestService;
    let httpClient: jasmine.SpyObj<HttpClient>;

    beforeEach(() => {
        const spy = jasmine.createSpyObj('HttpClient', ['post', 'get']);
        TestBed.configureTestingModule({
            providers: [TestService, { provide: HttpClient, useValue: spy }]
        });
        service = TestBed.inject(TestService);
        httpClient = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('#getHello should return correct value', () => {
        expect(service.getHello()).toBe('Hello Service');
    });

    it('#saveBook should save the book', () => {
        const requestBody = {
            bookName: 'mockBookName',
            bookPrice: 'mockBookPrice',
            authorName: 'mockAuthorName'
        };
        const returnValue = { bookId: 1, ...requestBody };
        const returnValueObservable = new Observable((subscriber) =>
            subscriber.next(returnValue)
        );
        const headers = { 'Content-Type': 'application/json' };
        httpClient.post
            .withArgs('http://localhost:8080/addbook', requestBody, { headers })
            .and.returnValue(returnValueObservable);

        service
            .saveBook(
                requestBody.bookName,
                requestBody.bookPrice,
                requestBody.authorName
            )
            .subscribe((res) => expect(res).toBe(returnValue));
    });

    it('#viewBooks should get books', () => {
        const books = [
            {
                bookName: 'mockBookName1',
                bookPrice: 'mockBookPrice1',
                authorName: 'mockAuthorName1'
            },
            {
                bookName: 'mockBookName2',
                bookPrice: 'mockBookPrice2',
                authorName: 'mockAuthorName2'
            },
            {
                bookName: 'mockBookName3',
                bookPrice: 'mockBookPrice3',
                authorName: 'mockAuthorName3'
            }
        ];

        const booksObservable = new Observable((subscriber) =>
            subscriber.next(books)
        );
        httpClient.get
            .withArgs('http://localhost:8080/')
            .and.returnValue(booksObservable);
        service.viewBooks().subscribe((res) => expect(res).toBe(books));
    });
});
