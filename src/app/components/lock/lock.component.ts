import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lock',
  templateUrl: './lock.component.html',
  styleUrls: ['./lock.component.css']
})
export class LockComponent implements OnInit {
  @Output('unlock') unlockEvent: EventEmitter<void> = new EventEmitter<void>();
  private password: string = '1234';
  public wrong: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  unlock(value: string){
    if(this.password === value){
      this.unlockEvent.emit();
    } else {
      this.wrong = true;
    }
  }
}
