import { HostListener, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-history-view',
  templateUrl: './history-view.component.html',
  styleUrls: ['./history-view.component.css'],
})
export class HistoryViewComponent implements OnInit {

  // initial dummy obj for history item
  histories = [{
    created_at: '?',
    video_url: '?',
    video_id: '?'
  }];

  startUrl = 'http://localhost:8000/histories/';
  totalHistory = 0;

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
    this.http.get<any>(this.startUrl).subscribe(data => {
      this.histories = data.results;
      this.totalHistory = data.count || 0;
    })
  }

}
