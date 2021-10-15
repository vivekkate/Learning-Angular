import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {


  btnStatus=true;
  val="Hello ";
  v="";

  content='server is not added yet ...!'


  constructor() { 
    setTimeout(()=>{
      this.btnStatus=false;
    },3000);
  }

  addServer(){
    this.content="server is added";
  }

  inputStatus(event:any){
    this.v=this.v+this.val;  
    // console.log(event.target.value);
  }




  ngOnInit(): void {
  }

}
