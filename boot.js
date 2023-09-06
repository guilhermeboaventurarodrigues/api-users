module.exports = app => {
    async function start(port) {
     try {
         await app.db.authenticate();
         await app.db.sync();
         app.listen(8080, console.log("Servidor rodando na porta 8080"))
     } catch (error) {
         console.error(error)
     }
    }
 
    start(app.get(8080));
 }