import "reflect-metadata" //Needed for dependecy injection
import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/UserRoutes';
import healthRoutes from "./routes/HealthRoutes";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "../docs/openapi.json";

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors<Request>({
    origin: true, // This disables the 'Access-Control-Allow-Origin' header
}));

// Routes
app.use('/users', userRoutes);
app.use("/health", healthRoutes);

// API documentation
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));

export default app;