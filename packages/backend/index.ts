import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express();

try {
  await mongoose.connect(process.env.DATABASE_URI);
} catch (error) {
  console.error(error);
}

app.listen(process.env.PORT || 3000);
