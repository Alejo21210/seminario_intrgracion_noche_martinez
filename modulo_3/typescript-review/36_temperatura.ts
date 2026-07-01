// Ejemplo aplicado — clase Temperatura (Fahrenheit → Celsius)

class Temperatura {
  valorCelsius: number;
  valorFahrenheit: number;

  constructor(fahrenheit: number) {
    this.valorFahrenheit = fahrenheit;
    this.valorCelsius = (fahrenheit - 32) * 5 / 9;
  }

  aKelvin(): number {
    return this.valorCelsius + 273.15;
  }

  describir(): string {
    return (
      `${this.valorFahrenheit}°F = ` +
      `${this.valorCelsius.toFixed(2)}°C = ` +
      `${this.aKelvin().toFixed(2)}K`
    );
  }
}

const hervor = new Temperatura(212);
const congelacion = new Temperatura(32);

console.log(hervor.describir());
console.log(congelacion.describir());
