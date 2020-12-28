import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookViewerComponent } from './book-viewer/book-viewer.component';
import { CommonModule } from '@angular/common';
import { TestService } from './test/test.service';
import { SpyDirective } from './spy.directive';

const routes: Routes = [
    { component: FirstComponent, path: 'hello' },
    { component: BookComponent, path: 'book' }
];

@NgModule({
    declarations: [
        AppComponent,
        FirstComponent,
        BookComponent,
        BookViewerComponent,
        SpyDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        CommonModule,
        NgbModule,
        ReactiveFormsModule
    ],
    providers: [TestService],
    bootstrap: [AppComponent]
})
export class AppModule {}
