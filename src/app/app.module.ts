import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { BaseComponent } from './layouts/base/base.component';
import { ComicPageComponent } from './pages/Base/comic-page/comic-page.component';
import { ComicPageDetailComponent } from './pages/Base/comic-page-detail/comic-page-detail.component';
import { ComicChapterComponent } from './pages/Base/comic-chapter/comic-chapter.component';
import { SignInComponent } from './pages/Base/sign-in/sign-in.component';
import { SignUpComponent } from './pages/Base/sign-up/sign-up.component';
import { ComicListComponent } from './pages/Admin/Comic/comic-list/comic-list.component';
import { ComicAddComponent } from './pages/Admin/Comic/comic-add/comic-add.component';
import { ComicUpdateComponent } from './pages/Admin/Comic/comic-update/comic-update.component';
import { AuthorListComponent } from './pages/Admin/Author/author-list/author-list.component';
import { AuthorAddComponent } from './pages/Admin/Author/author-add/author-add.component';
import { AuthorUpdateComponent } from './pages/Admin/Author/author-update/author-update.component';
import { CategoryListComponent } from './pages/Admin/Category/category-list/category-list.component';
import { CategoryAddComponent } from './pages/Admin/Category/category-add/category-add.component';
import { CategoryUpdateComponent } from './pages/Admin/Category/category-update/category-update.component';
import { UserListComponent } from './pages/Admin/User/user-list/user-list.component';
import { UserUpdateComponent } from './pages/Admin/User/user-update/user-update.component';
import { SearchComponent } from './components/search/search.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

import { HomePageComponent } from './pages/Base/home-page/home-page.component';

// import { DashboardComponent } from './pages/Admin/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    AdminComponent,
    BaseComponent,
    ComicPageComponent,
    ComicPageDetailComponent,
    ComicChapterComponent,
    SignInComponent,
    SignUpComponent,
    ComicListComponent,
    ComicAddComponent,
    ComicUpdateComponent,
    AuthorListComponent,
    AuthorAddComponent,
    AuthorUpdateComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryUpdateComponent,
    UserListComponent,
    UserUpdateComponent,
    SearchComponent,
    ErrorPageComponent,
    HomePageComponent
//     DashboardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
