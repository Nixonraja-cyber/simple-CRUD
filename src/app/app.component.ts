import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularcrud';
  //loginFrom!=FormGroup;
customers:any;
  constructor(private fb: FormBuilder,private service :ServicesService) {


  }
  ngOnInit():void{
    this.getCustomer();
  }
  loginFrom = this.fb.group({
    id: [''],
    name: [''],
    email: [''],
    phone: ['']

  })
  getCustomer(){
this.service.GetCustomer().subscribe(res=>{
  console.log(res);
  this.customers=res;
})
  }
  editClick(customer:any){
console.log(customer);
this.loginFrom.setValue({
  id: customer.id,
  name: customer.name,
  email: customer.email,
  phone: customer.phone
})

  }
  formSubmit(){
    if(this.loginFrom.valid){
    this.service.PostCustomer(this.loginFrom.value).subscribe(res=>{
      console.log(res);
      alert('added')
      this.loginFrom.reset();
      this.getCustomer();
      
    },err=>{
    alert("not ceate :"+err)  
    })
  }
}
}
