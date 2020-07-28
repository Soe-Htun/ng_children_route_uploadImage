import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from  '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  @HostListener('window:keypress',['$event'])
  onkeypress(event){
    if(event.keyCode === 106 || 56){
      this.logout();
    }
  }
  logout(){
    this.router.navigate(['/'])
  }
  // User(){
  //   this.router.navigate(['childrenacc'])
  // }
}
