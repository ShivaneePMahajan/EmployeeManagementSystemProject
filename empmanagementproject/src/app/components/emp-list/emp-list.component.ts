import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/common/employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  employees:Employee[];
  constructor(private empService:EmployeeService) 
  {

   }

  ngOnInit(): void 
  {
    this.getAllEmployees();
  }
getAllEmployees()
{
  this.empService.getAllEmployee().subscribe(data=>{
    console.log(data);
    this.employees=data;
  });
}
}

