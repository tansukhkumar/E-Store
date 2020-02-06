import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg:any;
  admin=["Admin@gmail.com","12345"];
  constructor(private router :Router) { }


  ngOnInit() {
  }

  public adminNow(Email,Password)
  {
    if(Email==this.admin[0] && Password==this.admin[1])
    {
        sessionStorage.setItem("adminemail",this.admin[0])
        this.router.navigate(["/admin"]);
    }
    else{

      this.msg="Enter valid credentials"
      this.router.navigate(["Admin_Login"])
    }
  }

}
