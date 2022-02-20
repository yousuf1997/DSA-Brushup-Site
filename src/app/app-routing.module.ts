import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentViwerComponent } from './content-viwer/content-viwer.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  { path: 'content-viewer', component: ContentViwerComponent },
  { path: 'content', component: ContentComponent },
  { path: '',   redirectTo: '/content', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
