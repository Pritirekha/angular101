import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';

const routes: Routes = [
    { component: FirstComponent, path: 'hello' },
    { component: BookComponent, path: 'book' }
];

@NgModule({
    declarations: [AppComponent, FirstComponent, BookComponent],
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
