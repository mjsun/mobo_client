import { Component } from '@angular/core';
import { AppService } from './app.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  test:string;
  test1:any;
  constructor(private appService: AppService) {
    this.test = this.appService.getStoreDetails();
    this.init();
  }

  async init() {
    this.appService.getStoreList().subscribe(data => {
      this.test1 = data;
      console.log(data)
    });

  }

}
