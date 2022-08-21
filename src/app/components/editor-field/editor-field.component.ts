import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DataConfigService } from 'src/app/shared/data-config.service';
@Component({
  selector: 'app-editor-field',
  templateUrl: './editor-field.component.html',
  styleUrls: ['./editor-field.component.css']
})
export class EditorFieldComponent implements OnInit, OnChanges {
  @Input() control!: boolean[];
  public styleStatus: boolean = false;
  public editStatus: boolean = false;
  public editable: boolean = false;
  public text: string = '';
  public generator: boolean = false;
  constructor(private data: DataConfigService) {
    this.text = this.data.text;
  }
  ngOnChanges(): void {
    if (this.control) {
      this.editStatus = this.control[0];
      this.styleStatus = this.control[1];
      this.editable = this.control[2];
    }
    if (this.editable) {
      this.text = this.data.text;
    }
  }
  ngOnInit(): void {
  }
  setValue(value: string) : void{
    this.text = value;
  }
  save(value: string): void {
    if (this.editable) {
      this.editable = false;
      this.data.text = value;
      this.text = '';
    }
  }
  add(template: string) :void{
    this.text += template;
  }
}
