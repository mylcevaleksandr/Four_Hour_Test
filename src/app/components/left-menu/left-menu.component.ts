import {Component} from '@angular/core';
import {NgForOf} from '@angular/common';
import {MenuItemComponent} from '../menu-item/menu-item.component';
import {MenuItem} from '../../interfaces/menu-item';

@Component({
  selector: 'app-left-menu',
  standalone: true,
  imports: [
    NgForOf,
    MenuItemComponent
  ],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.scss'
})
export class LeftMenuComponent {
  items: MenuItem[] = [
    {componentName: 'app-home', src: 'home.svg', title: 'Dashboard', route: 'dashboard'},
    {componentName: 'app-transactions', src: 'transactions.svg', title: 'Transactions', route: 'transactions'},
    {componentName: 'app-accounts', src: 'accounts.svg', title: 'Accounts', route: 'accounts'},
    {componentName: 'app-investments', src: 'investments.svg', title: 'Investments', route: 'investments'},
    {
      componentName: 'app-credit-cards',
      src: 'credit_cards.svg',
      title: 'Credit Cards',
      route: 'creditcards',
      active: true
    },
    {componentName: 'app-loan', src: 'loan.svg', title: 'Loans', route: 'loans'},
    {componentName: 'app-service', src: 'service.svg', title: 'Services', route: 'services'},
    {componentName: 'app-privileges', src: 'privileges.svg', title: 'My Privileges', route: 'privileges'},
    {componentName: 'app-settings', src: 'settings.svg', title: 'Setting', route: 'setting', active: true}
  ];
}
