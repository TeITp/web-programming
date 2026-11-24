import express from 'express';
import sensors from './data/sensors.js';

const app = express();
const port = Number(process.env.PORT || 3000);

app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ message: 'Acoustic Watch API is running' });
});

app.get('/api/sensors', (_req, res) => {
  res.json(sensors);
});

app.get('/api/sensors/active', (_req, res) => {
  res.json(sensors.filter((sensor) => sensor.status === 'active'));
});

app.get('/api/sensors/stats', (_req, res) => {
  const active = sensors.filter((sensor) => sensor.status === 'active').length;
  const sum = sensors.reduce((total, sensor) => total + sensor.noiseLevel, 0);
  res.json({
    total: sensors.length,
    active,
    inactive: sensors.length - active,
    averageNoiseLevel: sensors.length ? sum / sensors.length : null,
  });
});

app.get('/api/sensors/:id', (req, res) => {
  const sensor = sensors.find((item) => item.id === Number(req.params.id));
  if (!sensor) {
    return res.status(404).json({ message: 'Sensor not found' });
  }
  res.json(sensor);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
