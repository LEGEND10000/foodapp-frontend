import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: any[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getMenuItems().subscribe(data => {
      this.menuItems = data;
    });
  }

  addToCart(item: any) {
    this.menuService.addItemToCart(item).subscribe(() => {
      console.log('Item added to cart');
    });
  }
}
