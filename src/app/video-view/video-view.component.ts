import { Component, AfterContentChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from "../common/shared.service";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements AfterContentChecked {
  
  public youtubeurl: string;
  public bookmarkColor: string;
  toggle = true;
  status = 'Add Bookmark'; 
  bookmarkUrl = 'http://localhost:8000/bookmarks/';
  historyUrl = 'http://localhost:8000/histories/';
  defaultUrl = 'https://youtube.com/watch?v=';

  youtubeValSearch: string;
  constructor(
    private _snackBar: MatSnackBar,
    private http: HttpClient, 
    private sharedService: SharedService) { }

  ngOnInit(): void {
    this.youtubeurl = this.sharedService.youtubeValSearch;
    this.bookmarkColor = 'warn';
    console.log('masuk video');


    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  ngAfterContentChecked() {
    this.youtubeValSearch = this.sharedService.youtubeValSearch;
    // saved to history
    const formData = new FormData();
      formData.append('video_id', this.youtubeValSearch);
      formData.append('video_url', this.defaultUrl+this.youtubeValSearch);

      this.http.post<any>(this.historyUrl, formData).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
  }

  bookmarkClick(){
    if (this.toggle == true) {
      // save bookmark
      const formData = new FormData();
      formData.append('video_id', this.youtubeValSearch);
      formData.append('video_url', this.defaultUrl+this.youtubeValSearch);

      this.http.post<any>(this.bookmarkUrl, formData).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );

      // call the snackBar
      this.status = this.toggle ? 'Add Bookmark' : 'Remove Bookmark';
      this._snackBar.open(this.status, "close", {
        duration: 2000,
      });
      this.toggle = !this.toggle;      
      this.bookmarkColor = 'primary';
      this.sharedService.updateYoutubeValBookmark(this.youtubeValSearch);
    }
  }
}