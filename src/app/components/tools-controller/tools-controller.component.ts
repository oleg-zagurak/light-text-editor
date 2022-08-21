import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tools-controller',
  templateUrl: './tools-controller.component.html',
  styleUrls: ['./tools-controller.component.css']
})
export class ToolsControllerComponent implements OnInit {
  @Input() status: boolean = true;
  @Output('message') config: EventEmitter<any> = new EventEmitter<any>()
  public styleStatus: boolean = false;
  public editStatus: boolean = false;
  public editable: boolean = false;
  constructor() { }
  ngOnInit(): void {
  }
  changeStatus(name: string): void {
    if (name === 's') {
      this.styleStatus = true;
      this.editStatus = false;
      this.config.emit([this.editStatus, this.styleStatus, this.editable])
    } else {
      this.editStatus = true;
      this.editable = true;
      this.styleStatus = false;
      this.config.emit([this.editStatus, this.styleStatus, this.editable])
    }
  }
}
