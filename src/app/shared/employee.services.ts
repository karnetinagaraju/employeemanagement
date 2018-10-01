import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class EmployeeService {

    constructor(private http: HttpClient) {
    }

    registerUser(userdata: any) {
       return  this.http.post('http://localhost:3000/user/createData',
       userdata);
    }

    verifyUser(userdata: any) {
        return  this.http.post('http://localhost:3000/user/validateUser',
        userdata);
     }

    createEmployee(employee: any) {
        return  this.http.post('http://localhost:3000/employee/createData',
         employee);
     }

     showAllEmployees() {
        return this.http.get<any[]>('http://localhost:3000/employee/getAll');
     }


    getEmployeeById(no: any) {
        return this.http.get<any>('http://localhost:3000/employee/getEmployeeByID?employee_id=' + no);
    }

    updateEmployee(employee: any) {
        return  this.http.post('http://localhost:3000/employee/updateData',
         employee);
    }

    deleteEmployee(empId: number) {

       return  this.http.post('http://localhost:3000/employee/deleteData',
       {employee_id: empId});
    }




}
