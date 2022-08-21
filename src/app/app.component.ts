import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public status!: boolean;
  public config!: any;
  constructor(){}
  getConfig(data: any): void {
    this.config = data;
  }
}
