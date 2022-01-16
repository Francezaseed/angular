import { Component, OnInit } from '@angular/core';
import { OrderphotoService } from 'src/app/servicephoto/orderphoto.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor(private service:OrderphotoService) { }
  photodata:any;
  ngOnInit(): void {
    this.photodata = this.service.photodetail;
  }

}

