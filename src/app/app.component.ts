import { Component } from '@angular/core';
import { on } from 'cluster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:String = 'My application';
  version:Number = 1.0;
  disabled:Boolean = true;

  changeTitle(event){
    this.title = event.target.value;
    //this.title = event.key;
  }
}
