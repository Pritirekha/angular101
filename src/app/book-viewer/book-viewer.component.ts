import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-book-viewer',
    templateUrl: './book-viewer.component.html',
    styleUrls: ['./book-viewer.component.scss']
})
export class BookViewerComponent implements OnInit {
    @Input() book: any;
    @Output() whenClicked = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}
}
