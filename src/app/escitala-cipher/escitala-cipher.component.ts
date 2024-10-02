import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-escitala-cipher',
  standalone: true, // Componente standalone
  imports: [CommonModule, FormsModule], // Importamos FormsModule aquí
  templateUrl: './escitala-cipher.component.html',
  styleUrls: ['./escitala-cipher.component.css']
})
export class EscitalaCipherComponent {
  text: string = '';
  rows: number = 0;
  result: string = '';

  cipherEscitala() {
    const columns = Math.ceil(this.text.length / this.rows);
    let matrix: string[][] = Array.from({ length: this.rows }, () => []);

    let index = 0;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (index < this.text.length) {
          matrix[i][j] = this.text[index++];
        } else {
          matrix[i][j] = ' '; // Rellenar con espacios si es necesario
        }
      }
    }

    // Leer la matriz por columnas
    this.result = matrix[0]
      .map((_, i) => matrix.map(row => row[i]).join(''))
      .join('');
  }
}
