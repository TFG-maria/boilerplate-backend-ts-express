import {DataSource} from "typeorm";
import {User} from "../src/entities/User";

let ds: DataSource;
export const RelationalDataSource = (
    ds = new DataSource({
        type: "postgres",
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: String(process.env.DB_USERNAME),
        password: String(process.env.DB_PASSWORD),
        database: String(process.env.DB_NAME),
        entities: [User],
        logging: false,     // set this to true to enable database logs
        synchronize: true   // set this to true to sync database or false if
                            // you don't want to recreate tables when running the backend
    }));