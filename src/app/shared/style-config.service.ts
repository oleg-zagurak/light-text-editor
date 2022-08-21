import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleConfigService {
  public styles = {
    size: '12',
    font: '',
    color: 'black',
    bgColor: '',
    bold: false,
    italic: false
  }
  constructor() { }
}
