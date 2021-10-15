import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {


  btnStatus=true;

  content='server is not added yet ...!'


  constructor() { 
    setTimeout(()=>{
      this.btnStatus=false;
    },3000);
  }

  addServer(){
    this.content="server is added";
  }




  ngOnInit(): void {
  }

}
