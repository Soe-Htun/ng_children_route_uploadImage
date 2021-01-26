import { Component, HostListener, OnInit } from '@angular/core';
import {Router } from '@angular/router';

//connect with firebase
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

  
})
export class LoginComponent implements OnInit {courses:any[]
  constructor(private router:Router,
              public afAuth: AngularFireAuth ) { }
              

  username=""
  password=""
  view= true;
  hide=false;
  regname=''
  regpassword='';
  dialog=0;
  @HostListener('window:keydown',['$event'])
  onKeydown(event){
    const self=this;
    if(event.keyCode === 13){
      self.login();
    }
    if(event.keyCode ===  109){
        this.cancel()
    }
    if(event.keyCode === 38){
      this.sign_up();
    }
  }

  ngOnInit(): void {   
   // console.log("HI=>>",this.router);
    
  }
  // login(){
  //   if(this.dialog === 0){
  //     if( this.username === 'soe' && this.password === '123'){
  //       this.router.navigate(['home/admin']);
  //       console.log("HI=>>",this.router);
  //     } 
  //     else{
  //      alert("Wrong, retry again")
  //     }
  //   }
  // }
  login(){
    firebase.auth().signInWithEmailAndPassword(this.username, this.password)
    .then(() =>{
      // this.router.navigate(['home/admin'])
      this.router.navigate(['fileupload']);
    }).catch(e=>{
      alert(e.message)
    })
  }
  show_hide(){
    var eye=<HTMLInputElement>document.getElementById("password");
    if(eye.type ==="password"){
      eye.type="text";
      this.hide=true;
      this.view=false;
    }
    else{
      eye.type="password";
      this.view=true;
      this.hide=false;
    }
  }
  sign_up(){
    this.dialog=1;
  }
  create(){
    firebase.auth().createUserWithEmailAndPassword(this.regname, this.regpassword)
    .then(()=>{
      this.dialog=0;
      console.log("Successful");
      
    }).catch(e=>{
      alert(e.message)
    })
  }
  cancel(){
    this.dialog =0;
  }
}
