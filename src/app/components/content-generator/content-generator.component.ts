import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Itable } from 'src/app/shared/itable';
import { Ilist } from 'src/app/shared/ilist';

@Component({
  selector: 'app-content-generator',
  templateUrl: './content-generator.component.html',
  styleUrls: ['./content-generator.component.css']
})
export class ContentGeneratorComponent implements OnInit {
  @Output('create') creation: EventEmitter<string> = new EventEmitter<string>();
  @Output('close') close: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  validate(data: any, type: string): void{
    let status: boolean = true;
    for (const key in data) {
      if (!data[key]){
        status = false;
      }
    }
    if(status){
      if(type === 'table'){
        this.createTable(data);
      } else {
        this.createList(data);
      }
    }
  }
  createTable(data: Itable): void{
    let template = `<table>`;
    for(let i = 0; i < data.raws; i++){
      template += `<tr>`;
      for(let cell = 0; cell < data.cells; cell++){
        template += `<td style="width:${data.width}px;height:${data.height}px;border:${data.borderW}px ${data.borderT} ${data.borderC}"></td>`;
      }
      template += `</tr>`;
    }
    template += `</table>`;
    this.creation.emit(template);
    this.close.emit();
  }
  createList(data: Ilist): void{
    let template = `<ul>`;
    for (let i = 0; i < data.amount; i++){
      template += `<li style="list-style-type:${data.type}">Text</li>`
    }
    template += `</ul>`;
    this.creation.emit(template);
    this.close.emit();
  }
}
