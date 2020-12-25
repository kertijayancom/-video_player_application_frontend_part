import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable()
export class SharedService {
    youtubeValSearch: string;
    _youtubeValSearchBS = new BehaviorSubject<string>('');
   
    youtubeValHistory: string;
    _youtubeValHistoryBS = new BehaviorSubject<string>('');
   
    youtubeValBookmark: string;
    _youtubeValBookmarkBS = new BehaviorSubject<string>('');

  constructor() {
    this.youtubeValSearch;
    this.youtubeValHistory;
    this.youtubeValBookmark;

    this._youtubeValSearchBS.next(this.youtubeValSearch);
    this._youtubeValHistoryBS.next(this.youtubeValHistory);
    this._youtubeValBookmarkBS.next(this.youtubeValBookmark);
  }

  updateYoutubeValSearch(val: string) {
    this.youtubeValSearch = val;
    this._youtubeValSearchBS.next(this.youtubeValSearch);
  }

  updateYoutubeValHistory(val: string) {
    this.youtubeValHistory = val;
    this._youtubeValHistoryBS.next(this.youtubeValHistory);
  }

  updateYoutubeValBookmark(val: string) {
    this.youtubeValBookmark = val;
    this._youtubeValBookmarkBS.next(this.youtubeValBookmark);
  }

}