import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  out(): void {
    if(document.getElementById('open-close').style.display='none'){document.getElementById('open-close').style.display='block'}
  }
}
