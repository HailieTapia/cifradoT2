import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
type CipherMethods = 'cesar' | 'escitala' | 'triple-des' | 'ecc' | 'hash'; // Definir tipo para los métodos de cifrado

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    // Variables para el modal
  isModalOpen: boolean = false; // Controla si el modal está abierto
  selectedMethod: { title: string, description: string } | null = null; // Información del método seleccionado

  openModal(method: CipherMethods) {
    // Lógica para abrir el modal
    const methods: { [key in CipherMethods]: { title: string, description: string } } = {
      cesar: { title: 'Cifrado César', description: 'Una técnica de cifrado por sustitución en la que cada letra se reemplaza por otra letra que se encuentra un número fijo de posiciones más adelante.' },
      escitala: { title: 'Cifrado Escítala', description: 'Un antiguo método de cifrado que utiliza un dispositivo llamado escítala para realizar la codificación.' },
      'triple-des': { title: 'Cifrado 3DES', description: 'Triple DES es un algoritmo de cifrado que aplica el algoritmo DES tres veces a cada bloque de datos.' },
      ecc: { title: 'Cifrado ECC', description: 'Utiliza las propiedades de la teoría de números para ofrecer una forma más segura y eficiente de cifrado.' },
      hash: { title: 'Hash SHA-2', description: 'Una familia de funciones hash criptográficas que se utilizan en muchos estándares de seguridad.' }
    };

    this.selectedMethod = methods[method];
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedMethod = null;
  }
}
