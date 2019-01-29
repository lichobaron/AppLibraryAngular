import { RestClientService } from './../services/rest-client.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = 'user';
  password = 'password';

  message: any;

  @Output()
  userLog: EventEmitter<string> = new EventEmitter<string>();

  constructor(private restClient: RestClientService, private router: Router) {}

  ngOnInit() {}

  doLogin() {
    console.log(this.user + ' - ' + this.password);
    this.restClient.login(this.user, this.password).subscribe(data => {
        this.message = 'Login Ok';
        this.router.navigate(['/biblioteca/menu']);
      }, error => {
        console.error(error);
        this.message = "Usuario o Contraseña invalidos"
      });
  }
}
