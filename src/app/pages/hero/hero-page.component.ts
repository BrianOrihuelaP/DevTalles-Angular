import { UpperCasePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, signal, WritableSignal } from "@angular/core";

@Component({
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.css',

  // !Para indicar que no se use ZoneJs --->
  changeDetection: ChangeDetectionStrategy.OnPush, // Zoneless
  // * Zoneless funciona de la mano con las señales
  // !Para usar pipes en las plantillas --->
  imports: [UpperCasePipe]
})
export class HeroPageComponent {
  public name: WritableSignal<string> = signal('Ironman');
  public age: WritableSignal<number> = signal(45);
  public heroImage: WritableSignal<string> = signal('https://pngfre.com/wp-content/uploads/Iron-man-63-1024x1024.png');

  // señales computadas, no se puede usar set ni update dado que es de solo lectura
  public getHeroDescription = computed(() => `${this.name()} - ${this.age()}`);
  public capitalizeName = computed(() => `${this.name().toUpperCase()}`);

  public changeHero(): void {
    // this.name.update(hero => hero = 'SpiderMan');
    this.name.set("SpiderMan");
    this.age.set(22);
    this.cambiarImagen();
  }

  public resetForm(): void {
    this.name.set("Ironman");
    this.age.set(45);
    this.heroImage.set('https://pngfre.com/wp-content/uploads/Iron-man-63-1024x1024.png');
  }

  public changeAge(): void {
    this.age.set(60);
  }

  cambiarImagen(): void {
    this.heroImage.set('https://www.pngmart.com/files/2/Spider-Man-PNG-Photos.png');
  }
}
