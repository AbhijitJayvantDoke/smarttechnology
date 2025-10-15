import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./pages/footer/footer.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title=''
  
 
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}


