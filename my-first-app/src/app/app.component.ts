import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'David';
  btnProperty=true;

constructor(){

  setTimeout(() => {
    this.btnProperty=false;
  }, 3000);

}

}
