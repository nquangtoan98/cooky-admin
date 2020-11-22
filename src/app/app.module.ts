import {
  AgmCoreModule
} from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
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
import { CreateEditRecipesComponent } from './recipes/create-edit-recipes/create-edit-recipes.component';
import { RecipesComponent } from './recipes/recipes.component';
import { TipsComponent } from './tips/tips.component';
import { CreateEditTipComponent } from './tips/create-edit-tip/create-edit-tip.component';
import { CreateEditContestComponent } from './contests/create-edit-contest/create-edit-contest.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ReviewTipComponent } from './tips/review-tip/review-tip.component';

@NgModule({
  imports: [
    MatNativeDateModule, 
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    // NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    NgbModule
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
    CreateEditRecipesComponent,
    CreateEditTipComponent,
    CreateEditContestComponent,
    UserProfileComponent,
    ReviewTipComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
