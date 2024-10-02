import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root', // Este es como el "ID" del componente que puedes usar en el HTML
  standalone: true, // Componente standalone
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html', // Hace referencia al HTML que usa este componente
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cifrado';
}
