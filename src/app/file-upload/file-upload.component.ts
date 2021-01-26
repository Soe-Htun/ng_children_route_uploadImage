import { Component, OnInit } from '@angular/core';
import { read } from 'fs';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  imageUrl : string= "/assets/default.png";
  fileToUpload : File =null;
  constructor() { }

  ngOnInit(): void {
  }
  handleFileInput(file: FileList){
    this.fileToUpload = file.item(0);

    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }
}
