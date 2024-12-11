import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  // name:string="Arya";
  // age:number=21;
  // Bstatus="Not clicked";
  // onclick(){
  //   this.Bstatus="Button Clicked";
  // }
  msg1="";
  ischeck:boolean=false;
  studenlist=[
    {Id:1,name:"Anu",Mark:100},
    {Id:2,name:"Vinu",Mark:200},
    {Id:3,name:"Jinu",Mark:300},
    {Id:4,name:"Tinu",Mark:400},
  ]

  getday=new Date().getDay()

  
   dis(){
    this.ischeck=true;
   }

  // display(){
  //   return "Name:"+this.name+" , Age:"+this.age
  // }
  // msg="Welcome";
  // wclass="warning";
  // checkT:boolean=true;
  // checkF:boolean=false;


}
