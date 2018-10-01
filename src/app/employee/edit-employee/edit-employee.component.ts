import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EmployeeService } from '../../shared/employee.services';
import { Employee } from '../../shared/employee.model';
import { LogoutServices } from '../../shared/logout.services';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {


  updateForm: FormGroup;
  id: number;
  employee: Employee;
  logoutFlag: boolean;
  constructor(private route: ActivatedRoute,
    private _employeeService: EmployeeService,
    private router: Router , private _logoutService: LogoutServices) { }



  ngOnInit() {

    this.updateForm = new FormGroup({
      'employee_id': new FormControl(null),
      'name': new FormControl(null),
      'mobile': new FormControl(null),
      'address': new FormControl(null),
      'username': new FormControl(null),
      'email': new FormControl(null)
    });
    this.logoutFlag =  this._logoutService.displayLogout;
    console.log('logout flag is ' + this.logoutFlag);
    this.route.queryParams.subscribe(
      params => {
        this.id = params['id'];
        console.log('id ;;' + id);

      }
    );
    const id = +this.route.snapshot.params['id'];

    console.log('id value is ' + id);
    this._employeeService.getEmployeeById(id)
      .subscribe(
        (employee) => {
          this.employee = employee;
          console.log('employee' + this.employee.name);

        }
      );
  }

  onSubmit() {
    console.log(this.updateForm.value);
    this._employeeService.updateEmployee(this.updateForm.value)
      .subscribe(
        () => {
          this.router.navigate(['/employee/listEmployee']);
        },
        err => console.error('error is ********* ' + err),
        () => console.log('test get request')
      );
  }



}
