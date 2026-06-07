import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  // necesitamos importar RouterLink;ink para usarlo en el template
  imports: [RouterLink, RouterLinkActive], // directivas
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
