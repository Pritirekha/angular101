import { Component, OnInit } from '@angular/core';
import { TestService } from '../test/test.service';

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
    testString: string;
    inputString = 'hi';
    titleText = 'Some Text';

    constructor(private testService: TestService) {}

    ngOnInit(): void {
        this.testString = this.testService.getHello();
    }

    pressed(): void {
        console.log('Clicked');
    }
}
