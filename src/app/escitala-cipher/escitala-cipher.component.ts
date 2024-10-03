import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-escitala-cipher',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: './escitala-cipher.component.html',
  styleUrls: ['./escitala-cipher.component.css']
})
export class EscitalaCipherComponent {
  text: string = '';
  rows: number = 0;
  result: string = '';
  errorMessage: string = '';

  
  // Método para cifrar
  cipherEscitala() {
    if (this.validateInput()) {
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
      this.errorMessage = ''; // Limpiar mensaje de error
    }
  }

  // Método para descifrar
  decipherEscitala() {
    if (this.validateInput()) {
      const columns = Math.ceil(this.text.length / this.rows);
      let matrix: string[][] = Array.from({ length: columns }, () => []);

      // Rellenar la matriz por columnas
      let index = 0;
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < columns; j++) {
          if (index < this.text.length) {
            matrix[j][i] = this.text[index++];
          }
        }
      }

      // Leer la matriz por filas
      this.result = matrix
        .map(row => row.join(''))
        .join('')
        .trim(); // Eliminar espacios al final
      this.errorMessage = ''; // Limpiar mensaje de error
    }
  }

  // Método para validar entradas
  validateInput(): boolean {
    if (this.rows < 1) {
      this.errorMessage = 'El número de columnas debe ser al menos 1.';
      return false;
    }
    if (!this.text.trim()) {
      this.errorMessage = 'El mensaje no puede estar vacío.';
      return false;
    }
    this.errorMessage = ''; // Limpiar mensaje de error
    return true;
  }
}
