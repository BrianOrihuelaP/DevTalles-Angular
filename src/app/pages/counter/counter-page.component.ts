import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter-page.html',
  styleUrl: './counter-page.css',

  // !Para indicar que no se use ZoneJs
  changeDetection: ChangeDetectionStrategy.OnPush // Zoneless
  // * Zoneless funciona de la mano con las señales
})
export class CounterPageComponent {
  // * Los signals te dan una forma más sencilla y eficiente de manejar estado en Angular
  // * sin recurrir a RxJS o NgRx, manteniendo la reactividad y claridad en tu código.

  // como se manejaba antes
  public counter: number = 0;
  // con signals
  public counterSignal = signal(0);

  increaseBy(value: number): void {
    console.log("increase");
    this.counter += value;
    this.counterSignal.update(current => current + value);
  }

  decreaseBy(value: number): void {
    console.log("decrease");
    if (this.counter >= 1) {
      this.counter -= value;
    }

    if (this.counterSignal() >= 1) {
      this.counterSignal.update(current => current - value);
    }
  }

  resetCounter(): void {
    console.log("reset");
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
