import { Component, OnInit } from '@angular/core';
import { ServiceCoures } from './coures.service'
@Component({
  //Neu su dung keyup bình thường thì khi ta nhập chữ nào, chữ đó sẽ xuất hiện,
  //còn nếu sử dụng keyup.enter thì giá trị chỉ xuất hiện khi ta nhấn enter
  selector: 'app-coures',
  template: `
    <ul *ngFor="let cour of coures">
      <li>{{cour}}</li>
    </ul>

    <h4>{{pass}}</h4>
    <div>

    &nbsp;<button class="btn btn-outline-primary" [class.active]="isActive"> Active</button>
    &nbsp;<input #email (keyup.enter)="onKeyUp(email.value)">
    &nbsp;Pass: <input [(ngModel)]="pass" > 
    &nbsp;<button (click)="getPass()">Button</button> 

    </div>
    
    <table>
      <tr>
        <td [attr.colspan]="colSpan"></td>
      </tr>
    </table>
    
    
    
    `,
  
  styleUrls: ['./coures.component.css'],
  providers: [ServiceCoures]
})
export class CouresComponent implements OnInit {

  pass = "";
  colSpan = 2;
  coures;
  isActive = true;
  constructor(service: ServiceCoures) { 
    this.coures = service.getCoures();
  }

  
  onKeyUp(email)
  {
    console.log(email);
  }

  getPass()
  {
    console.log(this.pass);
  }

  ngOnInit() {
  }
}
