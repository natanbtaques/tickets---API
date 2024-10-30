
/** 
 * * CREATE - criar
 *   INDEX - listar
 *   UPDATE - atualizar
 *   REMOVE - remover
 *   SHOW - mostrar
 */
export function index ({request,response,database}){

    const {status} = request.query;
    const filters = status ? {status} : null;
    const ticket = database.select("tickets",filters);

    

    return response.writeHead(201).end(JSON.stringify(ticket));

}
