import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/home-page', title: 'Home Page',  icon: 'home', class: '' },
    { path: '/user-profile', title: 'User Management',  icon:'person', class: '' },
    { path: '/recipes', title: 'Recipes',  icon:'import_contacts', class: '' },
    { path: '/tips', title: 'Tips',  icon:'emoji_objects', class: '' },
    { path: '/contests', title: 'Contests',  icon:'people_alt', class: '' },
    { path: '/announcements', title: 'Announcements',  icon:'notifications', class: '' },
    { path: '/faq', title: 'FAQ',  icon:'help', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
