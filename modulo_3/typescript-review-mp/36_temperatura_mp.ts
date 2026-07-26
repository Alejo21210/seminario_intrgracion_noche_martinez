class TemperaturaMascota {
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

const fiebre = new TemperaturaMascota(104);
const normal = new TemperaturaMascota(101.5);

console.log(fiebre.describir());
console.log(normal.describir());
