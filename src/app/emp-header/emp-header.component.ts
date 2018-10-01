import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogoutServices } from '../shared/logout.services';


@Component({
  selector: 'app-emp-header',
  templateUrl: './emp-header.component.html',
  styleUrls: ['./emp-header.component.css']
})
export class EmpHeaderComponent implements OnInit {

  logoutFlag = true;

  constructor(private route: ActivatedRoute,
  private _logoutServices: LogoutServices) { }

  ngOnInit() {
    this.logoutFlag = this._logoutServices.displayLogout;
  }

}
