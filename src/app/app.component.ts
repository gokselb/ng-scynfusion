
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import {
  RichTextEditorComponent,
  ToolbarService,
  PasteCleanupSettingsModel,
  LinkService,
  ImageService,
} from '@syncfusion/ej2-angular-richtexteditor';
import { PasteCleanupService } from '@syncfusion/ej2-angular-richtexteditor';
import {
  HtmlEditorService,
  CountService,
  QuickToolbarService,
} from '@syncfusion/ej2-angular-richtexteditor';
import {
  Link,
  Count,
  HtmlEditor,
  QuickToolbar,
} from '@syncfusion/ej2-angular-richtexteditor';
import { TextBox } from '@syncfusion/ej2-inputs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    ToolbarService,
    LinkService,
    ImageService,
    HtmlEditorService,
    CountService,
    QuickToolbarService,
    PasteCleanupService,
  ]
})
export class AppComponent {
  title = 'ng-snycfusion';
  @ViewChild('pasteCleanupRTE')
  public rteObj: RichTextEditorComponent;

  @ViewChild('formatOption')
  public formatObj: any;

  @ViewChild('prompt')
  public promptObj: any;

  @ViewChild('plainText')
  public plainTextObj: any;

  @ViewChild('keepFormat')
  public keepFormatObj: any;

  @ViewChild('cleanFormat')
  public cleanFormatObj: any;

  @ViewChild('deniedTags')
  public deniedTags: TextBox;

  @ViewChild('deniedAttributes')
  public deniedAttributes: TextBox;

  @ViewChild('allowedStyleProperties')
  public allowedStyleProperties: TextBox;

  public pasteCleanupSettings: PasteCleanupSettingsModel = {
    prompt: true,
    plainText: false,
    keepFormat: false,
  };

  public formatData: { [key: string]: Object }[] = [
    { Id: 'prompt', Format: 'Prompt' },
    { Id: 'plainTextFormatting', Format: 'Plain Text' },
    { Id: 'keepFormating', Format: 'Keep Format' },
    { Id: 'Clean Formatting', Format: 'Clean Format' },
  ];
  public fields: any = { text: 'Format', value: 'Format' };
  public height: string = '200px';
  public value: string = 'Prompt';
}
