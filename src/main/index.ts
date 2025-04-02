import app from './app';
import {EnviromentUtils} from "../../context/env";

async function main(){
    //aqui se deben añadir configuraciones de infra e inversion de dependencias
    try{
        const port = EnviromentUtils.getEnvVar('PORT');
        app.listen(port);
        console.log('Server is listening on port', port);
    }
    catch(e){
        console.log(e);
    }
}

main();
