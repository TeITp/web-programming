import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { Sensor } from './sensor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected sensors: Sensor[] = [
    { id: 1, name: 'Сенсор Центр', district: 'Галицький', noiseLevel: 72, status: 'active' },
    { id: 2, name: 'Сенсор Сихів', district: 'Сихівський', noiseLevel: 58, status: 'active' },
    { id: 3, name: 'Сенсор Левандівка', district: 'Залізничний', noiseLevel: 45, status: 'inactive' },
  ];
  protected newName = '';
  protected newDistrict = '';
  protected newNoiseLevel: number | null = null;
  private nextId = 4;

  protected get canAdd(): boolean {
    return !!this.newName.trim() && !!this.newDistrict.trim() &&
      this.newNoiseLevel !== null && Number.isFinite(this.newNoiseLevel) && this.newNoiseLevel >= 0;
  }

  protected addSensor(): void {
    const noiseLevel = this.newNoiseLevel;
    if (!this.canAdd || noiseLevel === null) return;

    this.sensors.push({
      id: this.nextId++,
      name: this.newName.trim(),
      district: this.newDistrict.trim(),
      noiseLevel,
      status: 'active',
    });
    this.newName = '';
    this.newDistrict = '';
    this.newNoiseLevel = null;
  }

  protected deleteSensor(id: number): void {
    this.sensors = this.sensors.filter((sensor) => sensor.id !== id);
  }

  protected toggleStatus(sensor: Sensor): void {
    sensor.status = sensor.status === 'active' ? 'inactive' : 'active';
  }
}
