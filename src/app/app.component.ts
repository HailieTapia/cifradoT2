import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component'; // Importar el header
import { FooterComponent } from './footer/footer.component'; // Importar el footer

@Component({
  selector: 'app-root', // Este es como el "ID" del componente que puedes usar en el HTML
  standalone: true, // Componente standalone
  imports: [RouterModule, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html', // Hace referencia al HTML que usa este componente
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cifrado';
}
