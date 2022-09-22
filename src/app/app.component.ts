import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DailyPoc';

  name = 'vivek';
  email = 'vivekluck6@gmail.com';
  status = 'InActive';

  clickactive1:boolean;
  clickactive2:boolean;

  constructor(public router:Router){
  }
  ngOnInit(): void {
    
  }

  inActive(){
    this.status='InActive'
    this.clickactive1=true;
    this.clickactive2=false;
  }
  active()
  {
    this.status='Active'
    this.clickactive2=true;
    this.clickactive1=false;
  }

}
