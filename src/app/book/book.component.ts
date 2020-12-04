import { Component, OnInit } from '@angular/core';
import { TestService } from '../test/test.service';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
    bookName: string;
    bookPrice: string;
    authorName: string;
    books: any[];
    constructor(private testService: TestService) {}

    async ngOnInit(): Promise<void> {
        this.books = await this.testService.viewBooks();
    }
    onSubmit() {
        this.testService
            .saveBook(this.bookName, this.bookPrice, this.authorName)
            .then((res) => this.ngOnInit());
    }
}
