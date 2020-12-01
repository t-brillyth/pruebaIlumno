import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [GeneralService]
})
export class NewsComponent implements OnInit {

  news: any = [];
  status: string;
  title: any;
  id: any;
  body: any;

  constructor(
    private _route: ActivatedRoute,
    private _generalService: GeneralService
  ) { }

  ngOnInit(): void {
    this.loadPage();
  }

  loadPage(){
    this._route.params.subscribe(params => {
      let id = params['id'];
      this.getNewsHome(id);
    })
  }

  getNewsHome(id) {
    this._generalService.getNews().subscribe(
      response => {
        this.news = response.find(item => item.id == id);
        this.id = this.news.id;
        this.title = this.news.title;
        this.body = this.news.body;
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);

        if (errorMessage != null) {
          this.status = 'error';
        }
      }
    );
  }

}