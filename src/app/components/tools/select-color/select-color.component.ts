import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-color',
  templateUrl: './select-color.component.html',
  styleUrls: ['./select-color.component.css']
})
export class SelectColorComponent implements OnInit {
  @Input() currentColor: string  = '';
  @Input() inputStyles: object | null = null;
  @Input() inputColorsList: string[] | null = null;
  @Output('changeColor') result: EventEmitter<string> = new EventEmitter<string>();
  private colorList: string[] = [ '#000000', '#F0F8FF', '#E52B50', '#FFBF00', '#FFFFFF', '#6D6F7E', '#00FFFF', '#7BA05B', '#66FF00', '#08E8DE', '#556832'];
  private colorIndex: number = 0;
  constructor() { }
  ngOnInit(): void {
    if(this.inputColorsList){
      this.colorList = this.inputColorsList
    }
    if(this.currentColor){
      this.colorIndex = this.colorList.indexOf(this.currentColor);
    }
  }
  setValue(e: Event): void {
    e.preventDefault();
    this.increaseColor();
  }
  increaseColor(): void{
    if(this.colorIndex === this.colorList.length - 1){
      this.colorIndex = 0;
    } else {
      ++this.colorIndex;
    }
    this.result.emit(this.colorList[this.colorIndex]);
  }
  decreaseColor(): void {
    if(this.colorIndex === 0){
      this.colorIndex = this.colorList.length - 1;
    } else {
      --this.colorIndex;
    }
    this.result.emit(this.colorList[this.colorIndex]);
  }
  setFocus(state: boolean, item: any): void {
    if(state){
      item.focused = true;
    } else {
      item.focused = false;
    }
  }
  keyColorChange(e: KeyboardEvent, item: any): void {
    e.preventDefault();
    if(item.focused){
      if(e.key === 'ArrowRight'){
        this.decreaseColor();
      } else if(e.key === 'ArrowLeft'){
        this.increaseColor();
      }
    }
  }
  get colorValue(): string {
    return this.colorList[this.colorIndex];
  }
}