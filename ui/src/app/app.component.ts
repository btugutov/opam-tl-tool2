import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ConnectorService } from './connector.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PAM Tool';
  user = null;

  selected = 0;
  hovered = 0;
  readonly = false;
  
  constructor(private location: Location, private _r: Router, private _route: ActivatedRoute, private _c: ConnectorService) {
  }
  ngOnInit(){

  }
  login(){
    this.user = {
      name: 'Tester',
      email: 'Lol'
    }
    this._c.checkConnection().then(res =>{
      console.log("app.component checkConnection RES =>", res)
    }).catch(function(error){
      console.log("app.component  checkConnection err =>", error)
    });
  }
  
}
