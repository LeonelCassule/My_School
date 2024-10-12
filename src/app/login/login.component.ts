import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    userName: '',
    password: ''
  };

  constructor(private _router: Router){ }

  public onLogin(){

    if(this.loginObj.userName == "leonel" && this.loginObj.password == "1994"){
      this._router.navigateByUrl('/curso');
    
    }
    else{
      alert("Credenciais Invalidas!");
    }
  }
}

