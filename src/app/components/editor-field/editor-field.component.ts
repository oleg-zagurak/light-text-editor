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
  public text: string = '';
  public generator: boolean = false;
  public generatorStatus: boolean = true;
  constructor(private data: DataConfigService) {
    this.text = this.data.text;
  }
  ngOnChanges(): void {
    if (this.control && this.generatorStatus) {
      this.editStatus = this.control[0];
      this.styleStatus = this.control[1];
    }
    this.text = this.data.text;
  }
  ngOnInit(): void {
  }
  setValue(value: string) : void{
    this.text = value;
  }
  save(value: string): void {
      this.data.text = value;
  }
  add(template: string) :void{
    this.text += template;
  }
  addTemplate(e:Event): void{
    let item: any = e.target;
    let type = item.dataset.type;
    let template = ``;
    switch(type){
      case '1':
        template += `<p></p>`;
      break;
      case '2':
        template += `<h1></h1>`;
        break;
      case '3':
        template += `<h2></h2>`;
      break;
      case '4':
        template += `<h3></h3>`;
      break;
      case '5':
        template += `<h4></h4>`;
      break;
      case '6':
        template += `<h5></h5>`;
      break;
      case '7':
        template += `<h6></h6>`;
      break;
      case '8':
        template += `<a href="#"></a>`;
      break;
      default :
      template = ``;
      break;
    }
    this.text += template;
  }
}
