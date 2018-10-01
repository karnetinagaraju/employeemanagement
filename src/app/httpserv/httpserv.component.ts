import { Component, OnInit } from '@angular/core';
import { HttpService} from '../httpService.services';
import { Response } from '@angular/http';

@Component({
  selector: 'app-httpserv',
  templateUrl: './httpserv.component.html',
  styleUrls: ['./httpserv.component.css']
})
export class HttpservComponent implements OnInit {
  id = 10;

  servers = [
    {
      name: 'TestServer',
      id: this.id
    },
    {
      name: 'ProdServer',
      id: this.id
    }

  ];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  onAddServer(servername: string) {
    this.servers.push(
      {
        name: servername,
      id: this.id
      }
    );
  }

  onSave() {
    this.httpService.storeSever(this.servers)
    .subscribe(
      (response) => console.log(response),
        (error) => console.log(error)
    );
  }

  // onGet() {
  //   this.httpService.fetchServers()
  //     .subscribe(
  //      (servers: any[])  => {
  //       for ( const server of servers) {
  //         this.servers = servers;
  //       }

  //        console.log(this.servers);
  //      },
  //      err => console.error('error is ********* ' + err),
  //      () => console.log('test get request')
  //     );
  // }

  onDelete() {
  this.httpService.deleteServers()
  .subscribe(
    () => console.log('some is working')
  );
}

onGet() {
  this.httpService.getEmployee()
    .subscribe(
     (employee)  => {
      for ( const emp of employee) {
        // this.servers = employee;
        console.log(emp);
      }

     },
     err => console.error('error is ********* ' + err),
     () => console.log('test get request')
    );
}

}
