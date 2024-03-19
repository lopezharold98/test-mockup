import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen: boolean = false;
  isSubMenuOpen: boolean = false;

  toggleMenu(): void {
    console.log("Haciendo click en el menu")
    this.isMenuOpen = !this.isMenuOpen;
  }
  toggleSubMenu(): void {
    
    this.isSubMenuOpen = !this.isSubMenuOpen; // Invierte el estado del menú desplegable al hacer clic en "Information"
  }
}
