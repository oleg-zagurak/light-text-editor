import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit{
  @Input() data: string = '';
  public status: boolean = true;
  public text!: SafeHtml;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }
  showExample(){
    this.text = this.sanitizer.bypassSecurityTrustHtml(this.data);
  }
}
