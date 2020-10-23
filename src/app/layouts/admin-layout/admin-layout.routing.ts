import { Routes } from '@angular/router';
import { AnnouncementsComponent } from 'app/announcements/announcements.component';
import { ContestsComponent } from 'app/contests/contests.component';
import { FaqComponent } from 'app/faq/faq.component';
import { HomePageComponent } from 'app/home-page/home-page.component';
import { RecipesComponent } from 'app/recipes/recipes.component';
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
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'recipes', component: RecipesComponent },
    { path: 'tips', component: TipsComponent },
    { path: 'contests', component: ContestsComponent },
    { path: 'announcements', component: AnnouncementsComponent },
    { path: 'faq', component: FaqComponent },
];
