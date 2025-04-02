import app from './app';
import {RelationalDataSource} from "../context/RelationalDatabase";

const PORT = process.env.PORT || 3000;

async function main(){
    //aqui se deben añadir configuraciones de infra e inversion de dependencias
    try{
        await RelationalDataSource.initialize();
        app.listen(PORT);
        console.log('Server is listening on port', PORT);
    }
    catch(e){
        console.log(e);
    }
}

main();