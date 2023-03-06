import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from './common/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
      private empURl="http://localhost:8080/api/emp";
  constructor(private httpclient:HttpClient) { }

  getAllEmployee():Observable<Employee[]>
  {
    return this.httpclient.get<getEmployeeResponse>(this.empURl).pipe(map(response=>response. _embedded.employees))
  }
}
interface getEmployeeResponse
{
  _embedded:
  {
    employees:Employee[]
  }
}