import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-cesar-cipher',
  standalone: true, // Componente standalone
  imports: [CommonModule, FormsModule], // Importamos FormsModule aquí
  templateUrl: './cesar-cipher.component.html',
  styleUrls: ['./cesar-cipher.component.css']
})
export class CesarCipherComponent {
  text: string = '';
  shift: number = 0;
  result: string = '';

  // Método para cifrar
  cipherCesar() {
    this.result = this.transformText(this.text, this.shift);
  }

  // Método para descifrar
  decipherCesar() {
    this.result = this.transformText(this.text, -this.shift);
  }

  // Método para transformar texto (cifrar o descifrar)
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
}


//Aquí defines la lógica de lo que hace el cifrado César. Por ejemplo, cómo transformar el texto ingresado.