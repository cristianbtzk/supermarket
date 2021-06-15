import 'reflect-metadata';
import 'dotenv/config';
import '../typeorm';
import cors from 'cors';
import express from 'express';

import { router as routes } from './routes';

const server = express();
server.use(cors());

server.use(express.json());
server.use(routes);

export { server };
