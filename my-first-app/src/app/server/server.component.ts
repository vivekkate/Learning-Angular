import { Component } from "@angular/core";

@Component({
    selector:'app-ser',
    templateUrl:'./server.component.html',
    styles:[
        `p{
            padding:50px;
            background-color:mistyrose;
            border: 3px solid black;
            align:centre;
        }`
    ]
})
export class SerComponent{
    a='abcd';
}