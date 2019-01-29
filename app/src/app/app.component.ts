import { Component } from '@angular/core';
import { RestClientService } from './services/rest-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private restClient: RestClientService) {}

  logout() {
    this.restClient.logout().subscribe(data => {
      }, error => {
        console.error(error);
      });
  }
  
}
