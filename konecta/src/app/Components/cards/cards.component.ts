import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { DataService } from '../../Services/data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {

  constructor(private tags:DataService) { }

  ngOnInit(): void {
  }
  getDataTags(){
    this.tags.getDataTags().subscribe((res:any)=>{
      return console.log(res);
    })
  }
}
