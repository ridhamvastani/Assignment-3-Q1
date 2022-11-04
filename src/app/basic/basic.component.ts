import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  title = 'pa';
  a:number=30;
  test:String='String For Test';
  date1 = new Date();
  b=[2,3,7,8,9,10];
  b1=[
    {
      id:101,
      name:'Full stack'
    },
    {
      id:102,
      name:'asp.net'
    },
    {
      id:103,
      name:'software engineering'
    },{
      id:104,
      name:'ot'
    },];
  selectedItem?:String;
  OnSelect(e:any){
     this.selectedItem =e.target.value
  }
  onmulti(){
    console.log("multi Selected");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
