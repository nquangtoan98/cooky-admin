import {
  AgmCoreModule
} from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ContestsComponent } from './contests/contests.component';
import { FaqComponent } from './faq/faq.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { RecipesComponent } from './recipes/recipes.component';
import { TipsComponent } from './tips/tips.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    MatIconModule,

    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    HomePageComponent,
    ContestsComponent,
    AnnouncementsComponent,
    FaqComponent,
    RecipesComponent,
    TipsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
