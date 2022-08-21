import { Component, DoCheck, HostListener, OnInit } from '@angular/core';

import { StyleConfigService } from 'src/app/shared/style-config.service';

@Component({
  selector: 'app-editor-styles',
  templateUrl: './editor-styles.component.html',
  styleUrls: ['./editor-styles.component.css']
})
export class EditorStylesComponent implements OnInit, DoCheck {
  public color: boolean = false;
  public bgColor: boolean = false;
  public moke!: any;
  constructor(private stylesObj: StyleConfigService) { 
    this.moke = this.stylesObj;
  }

  ngOnInit(): void {
  }
  ngDoCheck(): void {
    this.moke = this.stylesObj;
  }
  showColor(): void {
    this.color = true;
    this.bgColor = false;
  }
  showBgColor(): void {
    this.bgColor = true;
    this.color = false;
  }
  @HostListener('click', ['$event'])
  closeColors(event: any): void {
    if (event.target?.classList.contains('cell') || !event.target?.classList.contains('btn')) {
      this.color = this.bgColor = false;
    }
  }
  getColor(e: any, type: string): void {
    if(e.target?.classList.contains('cell') && type === 'color'){
      let value = e.target.dataset.color;
      this.stylesObj.styles.color = value;
    } else if(e.target?.classList.contains('cell') && type === 'bg'){
      let value = e.target.dataset.color;
      this.stylesObj.styles.bgColor = value;
    }
  }
  setChanges(obj: any): void{
    this.stylesObj.styles.size = obj.size;
    this.stylesObj.styles.font = obj.font;
    this.stylesObj.styles.bold = obj.bold;
    this.stylesObj.styles.italic= obj.italic;
  }
}
