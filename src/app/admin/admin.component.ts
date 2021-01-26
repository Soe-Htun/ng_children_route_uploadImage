import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'; //image upload
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  selectedFile = null;
  onFileSelected(event){
    console.log(event);
    this.selectedFile = event.target.files[0];
  }
  onUpload(){
    // this.http.post('');
  }
}
