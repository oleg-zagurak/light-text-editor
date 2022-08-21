import { Component, DoCheck, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { DataConfigService } from 'src/app/shared/data-config.service';
import { StyleConfigService } from 'src/app/shared/style-config.service';

@Component({
  selector: 'app-main-text',
  templateUrl: './main-text.component.html',
  styleUrls: ['./main-text.component.css']
})
export class MainTextComponent implements OnInit, DoCheck {
  public text!:string | SafeHtml;
  public styles!: any;
  constructor(private data:DataConfigService, private styleObj: StyleConfigService, private sanitizer: DomSanitizer) {
    this.text = this.data.text;
    this.styles = this.styleObj.styles;
  }

  ngOnInit(): void {
  }
  ngDoCheck(): void {
    this.text = this.sanitizer.bypassSecurityTrustHtml(this.data.text);
    this.styles = this.styleObj.styles;
  }
}
