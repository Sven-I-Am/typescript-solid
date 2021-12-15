export interface Appliance {
  turnOn(): void;
  turnOff(): void;
  bake(item: string);
}
