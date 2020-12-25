import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { BookmarkComponent } from './bookmark/bookmark.component';
// set the route here!
const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'bookmark', component: BookmarkComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
