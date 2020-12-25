import { HostListener, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from "../common/shared.service";

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {

  public bookmarkUrl: string;

  bookmarks = [{
    created_at: '?',
    video_url: '?',
    video_id: '?'
  }];

  startUrl = 'http://localhost:8000/bookmarks/?page=1';
  nextPage = '#';
  prevPage = '#';
  totalBookmarks = 0;
  bookmarkColor = 'warn';

  constructor( 
    private http: HttpClient,
    private sharedService: SharedService 
  ) { }

  ngOnInit(): void {
    this.http.get<any>(this.startUrl).subscribe(data => {
      this.bookmarks = data.results;
      this.nextPage = data.next || '#';
      this.prevPage = data.previous || '#';
      this.totalBookmarks = data.count || 0;
    })
  }

  @HostListener('click') getNextPage(): void {
    this.http.get<any>(this.nextPage).subscribe(data => {
      this.bookmarks = data.results;
        this.nextPage = data.next || '#';
        this.prevPage = data.previous || '#';
    })

  }

  @HostListener('click') getPrevPage(): void {
    this.http.get<any>(this.prevPage).subscribe(data => {
      this.bookmarks = data.results;
        this.nextPage = data.next || '#';
        this.prevPage = data.previous || '#';
    })

  }

  // ngAfterContentChecked() {
  //   this.bookmarkUrl = this.sharedService.youtubeValBookmark;
  //   this.http.get<any>(this.startUrl).subscribe(data => {
  //     this.bookmarks = data.results;
  //     this.nextPage = data.next || '#';
  //     this.prevPage = data.previous || '#';
  //     this.totalBookmarks = data.count || 0;
  //   })
  // }

  removeBookmark(val: string){
    console.log(`remove ${val}`);
  }

}
