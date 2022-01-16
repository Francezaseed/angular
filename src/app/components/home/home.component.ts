import { Component, OnInit } from '@angular/core';
import { OrderphotoService } from 'src/app/servicephoto/orderphoto.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:OrderphotoService) { }
  photodata:any;
  ngOnInit(): void {
    this.photodata = this.service.photodetail;
  }

}

