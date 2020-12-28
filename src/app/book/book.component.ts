import {
    AfterViewInit,
    Component,
    ElementRef,
    HostListener,
    OnInit,
    ViewChild
} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TestService } from '../test/test.service';
// @ts-ignore
import kidsData from './data.json';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit, AfterViewInit {
    bookForm = this.fb.group(
        {
            bookName: this.fb.control(''),
            bookPrice: this.fb.control(''),
            authorName: this.fb.control('')
        },
        [Validators.required]
    );
    // Same as
    /* bookForm = new FormGroup({
        bookName: new FormControl(),
        bookPrice: new FormControl(),
        authorName: new FormControl()
    }, [Validators.required]);*/
    books$: Observable<any> = null;
    @ViewChild('test') testingElement: ElementRef;
    constructor(private testService: TestService, private fb: FormBuilder) {}

    ngOnInit(): void {
        this.books$ = this.testService.viewBooks();
        console.log(kidsData);
    }

    ngAfterViewInit() {
        console.log(this.testingElement);
    }

    onSubmit() {
        const { bookName, bookPrice, authorName } = this.bookForm.value;
        this.testService
            .saveBook(bookName, bookPrice, authorName)
            .subscribe((res) => this.ngOnInit());
    }

    whenClicked(e) {
        console.log(e);
    }

    @HostListener('click') onclick() {
        console.log('Clicked');
    }
}
