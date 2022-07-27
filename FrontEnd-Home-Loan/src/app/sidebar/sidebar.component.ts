import { Component, OnInit } from '@angular/core';
import { Menu } from 'app/model/menu';


@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
   

    public MenuItems : any[];
    role :string;
    constructor() {}

    ngOnInit() {
          
          this.MenuItems = Menu.menu;

            this.role = sessionStorage.getItem('role');

          }
    }

