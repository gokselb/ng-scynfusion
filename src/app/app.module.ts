import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RichTextEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
