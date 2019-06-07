module.exports.index = (application, req, res) => {    
    let limite = 5;
    let offset = 0;

    var Usuario = application.config.database.models.Usuario;

    Usuario.buscarContagem()
    .then(data => {
        let pagina = req.params.pagina;
        let paginas = Math.ceil(data.count / limite);
        offset = limite * (pagina - 1);

        Usuario.buscar(limite, offset)
        .then(usuarios => {
            res.render('usuarios', {usuarios: usuarios, paginaAtual: pagina, paginas: paginas});
        }).catch(err => {
            console.log('erro ao buscar usuarios: ' + err);
            return;
        });
    }).catch(err => {
        console.log('erro ao buscar usuarios: ' + err);
        return;
    });
};