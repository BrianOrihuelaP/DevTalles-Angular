import { Component, computed, signal } from '@angular/core';

interface DragonballCharacter {
  id: number;
  name: string;
  ki: number;
  transformation: string;
  imageSrc: string;
}

@Component({
  selector: 'app-dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css'
})
export class DragonballSuperPageComponent {
  // signals de los inputs
  name = signal<string>('');
  ki = signal<number>(0);
  transformation = signal<string>('');
  imageSrc = signal<string>('');
  errorMessage = signal<string>('');
  showError = signal<boolean>(false);

  characters = signal<DragonballCharacter[]>([
    { id: 1, name: 'Goku', ki: 1350500, transformation: 'Super Saiyan Blue', imageSrc: 'https://pre00.deviantart.net/8c98/th/pre/i/2016/231/3/a/super_saiyan_2_goku_by_brusselthesaiyan-daek479.png' },
    { id: 2, name: 'Vegeta', ki: 1250500, transformation: 'Super Saiyan Blue', imageSrc: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dctlbwe-caaffae8-c272-4484-ae71-e08d4ea37925.png' },
  ]);

  // Computed signal for a classes with a specific ki level
  powerClasses = computed(() => {
    return {
      'text-danger': true, // Red for high ki
    }
  })

  addCharacter() {
    console.log('Adding character:', this.name(), this.ki(), this.transformation(), this.imageSrc());

    const newCharacter: DragonballCharacter = {
      id: this.characters().length + 1,
      name: this.name(),
      ki: this.ki(),
      transformation: this.transformation(),
      imageSrc: this.imageSrc()
    };

    if (this.validateExistsCharacter()) {
      this.showErrorMessage('El personaje ya existe en la lista.');
      return;
    }

    this.characters.update(current => [...current, newCharacter]);
  }

  validateExistsCharacter(): boolean {
    const exists = this.characters().some(character => character.name.trim().toLowerCase() === this.name().trim().toLowerCase()
      && character.transformation.trim().toLowerCase() === this.transformation().trim().toLowerCase());

    if (exists) {
      return true; // o muestra un mensaje de error al usuario
    }
    return false; // o permite continuar con la adición del personaje
  }

  showErrorMessage(message: string) {
    this.errorMessage.set(message);
    this.showError.set(true);
    setTimeout(() => {
      this.showError.set(false); // quitamos clase visible
      setTimeout(() => {
        this.errorMessage.set(''); // limpiamos el mensaje de error
      }, 500); // segundo
    }, 800); // primero
  }
}
