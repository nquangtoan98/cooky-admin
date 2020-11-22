import { Routes } from '@angular/router';
import { AnnouncementsComponent } from 'app/announcements/announcements.component';
import { ContestsComponent } from 'app/contests/contests.component';
import { CreateEditContestComponent } from 'app/contests/create-edit-contest/create-edit-contest.component';
import { FaqComponent } from 'app/faq/faq.component';
import { HomePageComponent } from 'app/home-page/home-page.component';
import { CreateEditRecipesComponent } from 'app/recipes/create-edit-recipes/create-edit-recipes.component';
import { RecipesComponent } from 'app/recipes/recipes.component';
import { CreateEditTipComponent } from 'app/tips/create-edit-tip/create-edit-tip.component';
import { ReviewTipComponent } from 'app/tips/review-tip/review-tip.component';
import { TipsComponent } from 'app/tips/tips.component';
import { UserProfileComponent } from 'app/user-profile/user-profile.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: '', component: HomePageComponent, redirectTo: 'home-page' },
    { path: 'home-page', component: HomePageComponent },
    { path: 'review-tip', component: ReviewTipComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'recipes', component: RecipesComponent },
    { path: 'tips', component: TipsComponent },
    { path: 'contests', component: ContestsComponent },
    { path: 'announcements', component: AnnouncementsComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'create-recipe', component: CreateEditRecipesComponent },
    { path: 'edit-recipe/:id', component: CreateEditRecipesComponent },
    { path: 'create-tip', component: CreateEditTipComponent },
    { path: 'edit-tip/:id', component: CreateEditTipComponent },
    { path: 'create-contest', component: CreateEditContestComponent },
    { path: 'edit-contest/:id', component: CreateEditContestComponent },
];
