import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './layouts/base/base.component';
import { ComicPageComponent } from './pages/Base/comic-page/comic-page.component';
import { ComicPageDetailComponent } from './pages/Base/comic-page-detail/comic-page-detail.component';
import { SignInComponent } from './pages/Base/sign-in/sign-in.component';
import { SignUpComponent } from './pages/Base/sign-up/sign-up.component';
import { ComicChapterComponent } from './pages/Base/comic-chapter/comic-chapter.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { ComicListComponent } from './pages/Admin/Comic/comic-list/comic-list.component';
import { ComicUpdateComponent } from './pages/Admin/Comic/comic-update/comic-update.component';
import { CategoryListComponent } from './pages/Admin/Category/category-list/category-list.component';
import { CategoryAddComponent } from './pages/Admin/Category/category-add/category-add.component';
import { CategoryUpdateComponent } from './pages/Admin/Category/category-update/category-update.component';
import { AuthorListComponent } from './pages/Admin/Author/author-list/author-list.component';
import { AuthorAddComponent } from './pages/Admin/Author/author-add/author-add.component';
import { AuthorUpdateComponent } from './pages/Admin/Author/author-update/author-update.component';
import { UserListComponent } from './pages/Admin/User/user-list/user-list.component';
import { UserUpdateComponent } from './pages/Admin/User/user-update/user-update.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ComicAddComponent } from './pages/Admin/Comic/comic-add/comic-add.component';
import { HomePageComponent } from './pages/Base/home-page/home-page.component';

const routes: Routes = [
  {
    path: '', component: BaseComponent, children: [
      { path: '', component: HomePageComponent },
      { path: 'comic', component: ComicPageComponent },
      { path: 'comic/:id', component: ComicPageDetailComponent },
      { path: 'comic/:id/chapter', component: ComicChapterComponent },
      { path: 'signin', component: SignInComponent },
      { path: 'signup', component: SignUpComponent },
    ]
  },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: 'comic', component: ComicListComponent },
      { path: 'comic/add', component: ComicAddComponent },
      { path: 'comic/:id/update', component: ComicUpdateComponent },
      { path: 'category', component: CategoryListComponent },
      { path: 'category/add', component: CategoryAddComponent },
      { path: 'category/:id/update', component: CategoryUpdateComponent },
      { path: 'author', component: AuthorListComponent },
      { path: 'author/add', component: AuthorAddComponent },
      { path: 'author/:id/update', component: AuthorUpdateComponent },
      { path: 'user', component: UserListComponent },
      { path: 'user/:id/update', component: UserUpdateComponent },
    ]
  },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
