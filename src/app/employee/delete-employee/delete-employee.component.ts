import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute , Params} from '@angular/router';
import { EmployeeService } from '../../shared/employee.services';
import { Employee } from '../../shared/employee.model';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

 id: any;
 employee: Employee;

  constructor(private route: ActivatedRoute,
    private _employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {

    this.route.queryParams.subscribe(
      params => {
        this.id = params['id'];
        console.log(';;;;;;;;;;;;;;' + this.id);

      }
    );
    const id = +this.route.snapshot.params['id'];
    console.log('empid id value' + this.id);
    debugger;
    this._employeeService.deleteEmployee(this.id)
      .subscribe(
        (response) => {

          console.log('Delete employee');
          this.router.navigate(['/employee/listEmployee']);

        }
      );
  }

}
