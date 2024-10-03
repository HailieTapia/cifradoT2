import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component'; 
import { FooterComponent } from './footer/footer.component'; 

@Component({
  selector: 'app-root', // Este es como el "ID" del componente que puedes usar en el HTML
  standalone: true, // Componente standalone
  imports: [RouterModule, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cifrado';
}
