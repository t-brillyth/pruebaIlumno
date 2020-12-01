import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [GeneralService]
})
export class HomeComponent implements OnInit {

  news: any[];
  status: string;
  title;

  constructor(
    private _generalService: GeneralService
  ) {
    this.title = "Sample";
  }

  ngOnInit(): void {
    this.getNewsHome();
  }

  getNewsHome() {
    this._generalService.getNews().subscribe(
      response => {
        this.news = response;
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
