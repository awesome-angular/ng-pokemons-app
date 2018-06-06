import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BorderCardDirective } from './border-card.directive';

@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent, BorderCardDirective],
	bootstrap: [AppComponent]
})
export class AppModule { }
