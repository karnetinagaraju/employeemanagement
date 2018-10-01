import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable  } from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';


 // import { catchError, map} from 'rxjs/operators';


@Injectable()
export class HttpService {

   test = [

    {
      name: 'test',
      mobile: '123',
       address: 'test'
    }
  ];

    constructor(private http: HttpClient) {

    }

    storeSever(severs: any[]) {
        return  this.http.post('https://my-test-angular.firebaseio.com/data.json', severs);

    }

    fetchServers(): any {
        return this.http.get<any[]>('https://my-test-angular.firebaseio.com/data.json')
        ;


      }

      deleteServers()  {
        return  this.http.delete('https://my-test-angular.firebaseio.com/data.json');
      }

      getEmployee() {
        return this.http.get<any[]>('http://localhost:3000/employee/getAll');

      }

      createEmp() {
        return this.http.get('http://localhost:3000/employee/createData');
      }
}
