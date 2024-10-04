import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cesar-cipher',
  standalone: true, // Componente standalone
  imports: [CommonModule, FormsModule],
  templateUrl: './cesar-cipher.component.html',
  styleUrls: ['./cesar-cipher.component.css']
})
export class CesarCipherComponent {
  text: string = '';
  shift: number = 0;
  result: string = '';
  errorMessage: string = '';

  // Método para cifrar
  cipherCesar() {
    this.validateInput(); // Validar entrada antes de procesar
    if (!this.errorMessage) {
      this.result = this.transformText(this.text, this.shift);
    }
  }

  // Método para descifrar
  decipherCesar() {
    this.validateInput(); // Validar entrada antes de procesar
    if (!this.errorMessage) {
      this.result = this.transformText(this.text, -this.shift);
    }
  }

  // Método para transformar texto
  private transformText(text: string, shift: number): string {
    return text.split('').map(char => {
      if (char.match(/[a-z]/i)) {
        const charCode = char.charCodeAt(0);
        const base = charCode >= 97 ? 97 : 65;
        return String.fromCharCode(((charCode - base + shift + 26) % 26) + base);
      }
      return char;
    }).join('');
  }

  // Método para validar la entrada
  private validateInput() {
    this.errorMessage = ''; // Limpiar mensajes de error
    if (!this.text) {
      this.errorMessage = 'El texto no puede estar vacío.';
    } else if (this.shift < 0 || this.shift > 25) {
      this.errorMessage = 'El desplazamiento debe estar entre 0 y 25.';
    }
  }
}


//Aquí defines la lógica de lo que hace el cifrado César. Por ejemplo, cómo transformar el texto ingresado.