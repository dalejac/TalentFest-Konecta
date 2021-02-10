import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { DataService } from '../../Services/data.service';
import { Quill } from 'quill';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.sass']
})
export class CardsContainerComponent implements OnInit {


  @Input() Article: any;

    data : any;
  constructor(private dataService: DataService) { }


  ngOnInit(): void {
    this.getKeyWord()
    this.renderArticle()
  }
  getKeyWord() {
    this.dataService.getKeyWord().subscribe((res: any) => {
      console.log(res);
      return this.data = res;
    })
  }

  renderArticle(){

      var fix_article:any = this.data.ops;
      for (var i = 0; i < fix_article.length; i++) {
        console.log(fix_article[i]);
        if (fix_article[i]["insert"].image) {
          fix_article[i]["insert"].image = "https://nik.grupokonecta.co:7070/" + fix_article[i]["insert"].image
        }
      }


      var quill = new Quill('#contenedor', {
        theme: 'bubble'
      });

      try {
        quill.updateContents(this.data);
      }
      catch (err){

      }

    }
  }

