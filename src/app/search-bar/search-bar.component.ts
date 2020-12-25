import { Component, OnInit } from '@angular/core';
import { SharedService } from "../common/shared.service";
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  
  youtubeValSearch: string;
  comp2Val: string;
  myForm: FormGroup;
  myModel= new MyModel();

  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedService) { 
      this.sharedService.youtubeValSearch = 'test';
      
    }

  ngOnInit(): void {   
    // this.youtubeValSearch = this.sharedService.youtubeValSearch; 
    this.myModel.okay = 'test1';
      this.myForm = this.formBuilder.group({
        okay: new FormControl({
          value: this.myModel.okay,
          disabled: false
        })
      });
  }

  setToModelFromForm() {
    this.sharedService.updateYoutubeValSearch(this.myForm.controls['okay'].value.split("=")[1]);
    console.log(this.sharedService.youtubeValSearch);
  }

  // ngAfterContentChecked() {
  //   this.comp2Val = this.sharedService.comp2Val;
  // }

}

export class MyModel {
  okay: string;
}