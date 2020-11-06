import { ConditionalExpr } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() fruitsArray: Array<any>;
  @Output() sendInfo: EventEmitter<any> = new EventEmitter<any>();

  displayArray = [];
  baslangicIndex = 0;
  sonIndex = 7;
  leftButtonDisable;
  rightButtonDisable;
  constructor() { }

  ngOnInit(): void {
    this.displayArray = this.fruitsArray.slice(this.baslangicIndex, this.sonIndex);
  }

  leftArrow() {
    if (this.baslangicIndex > 0) {
      this.leftButtonDisable = false;
      this.displayArray = [];
      this.baslangicIndex--;
      this.sonIndex--;
      for (let i = this.baslangicIndex+6; i >= this.baslangicIndex; i--) {
        this.displayArray.push(this.fruitsArray[i]);
      }
      this.displayArray.reverse();
    }
    else {
      this.leftButtonDisable = true;
    }
  }

  rightArrow() {
    if (this.sonIndex < this.fruitsArray.length) {
      this.rightButtonDisable = false;
      this.displayArray = [];
      this.baslangicIndex++;
      this.sonIndex++;
      for (let i = this.baslangicIndex; i < this.baslangicIndex + 7; i++) {
        this.displayArray.push(this.fruitsArray[i]);
      }
    }
    else {
      this.rightButtonDisable = true;
    }
  }

  getElement(fruit){
    
    this.sendInfo.emit(fruit);
  }




}
