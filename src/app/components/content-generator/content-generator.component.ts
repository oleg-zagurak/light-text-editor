import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Itable } from 'src/app/shared/itable';
import { Ilist } from 'src/app/shared/ilist';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-content-generator',
  templateUrl: './content-generator.component.html',
  styleUrls: ['./content-generator.component.css']
})
export class ContentGeneratorComponent implements OnInit, OnDestroy {
  @Output('create') creation: EventEmitter<string> = new EventEmitter<string>();
  @Output('close') close: EventEmitter<void> = new EventEmitter();
  public active: boolean = true;
  public activeTab: boolean = true;
  private tableC: string = '#000000';
  public static tableState: boolean = false;
  public static listState: boolean = false;
  public static color: string = '';
  public emptyListField: boolean = false;
  public emptyTableField: boolean = false;
  public s: boolean = true;
  public tableColorsList: string[] = ['#000000', '#660066', '#00cc00', '#cc0099', '#ff4d4d', '#e6e600', '#99ffff', '#003366'];
  private tableData!: Itable;
  private listData!: Ilist;
  public invalid: boolean | null = null;
  constructor() {}

  ngOnInit(): void {
    if(ContentGeneratorComponent.tableState){
      this.emptyTableField = true;
    }
    if(ContentGeneratorComponent.listState){
      this.emptyListField = true;
    }
    if(ContentGeneratorComponent.color !== ''){
      this.tableC = ContentGeneratorComponent.color;
    }
  }
  ngOnDestroy(): void {
    ContentGeneratorComponent.color = this.tableC;
  }
  setActive(type: boolean): void {
    if (type) {
      this.active = true;
      this.activeTab = true;
    } else if (!type) {
      this.active = false;
      this.activeTab = false;
    }
  }
  createTable(data: Itable = this.tableData): string {
    let template = `\n<table>`;
    for (let i = 0; i < data.raws; i++) {
      template += `<tr>`;
      for (let cell = 0; cell < data.columns; cell++) {
        template += `<td style="width:${data.width}px;height:${data.height}px;border:${data.borderWidth}px ${data.borderType} ${this.tableC}"></td>`;
      }
      template += `</tr>`;
    }
    template += `</table>`;
    return template;
  }
  createList(data: Ilist = this.listData): string {
    let template = ``;
    let end = ``;
    if(data.typeOfList === 'number') {
      template = `\n<ol type="${data.type}">`;
      end = `</ol>`
    } else if(data.typeOfList === 'mark'){
      template = `\n<ul type="${data.type}">`;
      end = `</ul>`
    }
    for (let i = 0; i < data.amount; i++) {
      template += `<li>Text</li>`
    }
    template += end;
    return template
  }
  setTableColor(color: string): void {
    this.tableC = color;
  }
  get tableColor(): string {
    return this.tableC
  }
  setTableData(data: Itable): void{
    this.tableData = data;
    this.invalid = true;
  }
  setListData(data: Ilist): void{
    this.listData = data;
    this.invalid = false;
  }
  setInvalid(): void{
    this.invalid = null;
  }
  addTable(data: Itable): void{
    let template = this.createTable(data);
    ContentGeneratorComponent.tableState = true;
    this.creation.emit(template);
    this.close.emit();
  }
  addList(data: Ilist):void {
    let template = this.createList(data)
    ContentGeneratorComponent.listState = true;
    this.creation.emit(template);
    this.close.emit();
  }
}
