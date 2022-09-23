import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleConfigService {
  public styles = {
    size: '16',
    font: 'Times New Roman',
    color: '#FFFFFF',
    bgColor: '#6D6F7E',
    bold: false,
    italic: false,
    underline: false
  }
  constructor() { }
}
