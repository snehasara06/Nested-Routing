import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './posts/create/create.component';
import { DetailsComponent } from './posts/details/details.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  // {path: 'posts',component: PostsComponent}
 { path: 'posts', children: [
      {path: '',component: PostsComponent},
      {path: 'create',component:CreateComponent},
      {path: 'detail',component:DetailsComponent}

]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
