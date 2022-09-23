import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public status!: boolean;
  public config!: any;
  private lockState: boolean = false;
  constructor(){}
  getConfig(data: any): void {
    this.config = data;
  }
  setLock(){
    this.lockState = true;
  }
  unlock(){
    this.lockState = false;
  }
  get lock(): boolean{
    return this.lockState;
  }
}
