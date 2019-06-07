module.exports = function(application){

    application.get('/:pagina', (req, res) => {
        application.app.controllers.usuariosController.index(application, req, res);
    });

}