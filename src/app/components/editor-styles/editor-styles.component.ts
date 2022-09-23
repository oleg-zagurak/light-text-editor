import { Component, OnInit } from '@angular/core';

import { StyleConfigService } from 'src/app/shared/style-config.service';

@Component({
  selector: 'app-editor-styles',
  templateUrl: './editor-styles.component.html',
  styleUrls: ['./editor-styles.component.css']
})
export class EditorStylesComponent implements OnInit{
  public moke!: any;
  public size!: number;
  public font!: string;
  public color!: string;
  public bgColor!: string;
  public italic!: boolean | null;
  public bold!: boolean | null;
  public underline!: boolean | null;
  public colorStyles: object = {'width': '40px', 'height': '40px'};
  public tableColorsList: string[] = ['#FFFFFF', '#660066', '#00cc00', '#cc0099', '#ff4d4d', '#e6e600', '#33bbff', '#003366', '#669900'];

  constructor(private stylesObj: StyleConfigService) {
  }

  ngOnInit(): void {
    this.font = this.stylesObj.styles.font;
    this.size = +this.stylesObj.styles.size;
    this.bgColor = this.stylesObj.styles.bgColor;
    this.color = this.stylesObj.styles.color;
    this.italic = this.stylesObj.styles.italic ? true : null;
    this.bold = this.stylesObj.styles.bold ? true : null;
    this.underline = this.stylesObj.styles.underline ? true : null;
  }
  setChanges(obj: any): void{
    this.stylesObj.styles.size = obj.size;
    this.stylesObj.styles.font = obj.font;
    this.stylesObj.styles.bold = obj.bold;
    this.stylesObj.styles.italic= obj.italic;
    this.stylesObj.styles.underline= obj.underline;
  }
  setColor(value: string):void {
    this.stylesObj.styles.color = value;
  }
  setBgColor(value: string): void {
    this.stylesObj.styles.bgColor = value;
  }
}
