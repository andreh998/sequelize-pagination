module.exports = (sequelize, DataType) => {
    var Usuario = sequelize.define('Usuario', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataType.STRING,
            allowNull: false
        },
        cpf: {
            type: DataType.STRING,
            allowNull: false
        },
        email: {
            type: DataType.STRING,
            allowNull: false
        },
        login: {
            type: DataType.STRING,
            allowNull: false
        },
        senha: {
            type: DataType.STRING,
            allowNull: false
        },
        ativo: {
            type: DataType.STRING,
            allowNull: false
        },
        id_perfil:{
            type: DataType.INTEGER,
            allowNull: false
        },
        id_depto: {
            type: DataType.INTEGER,
            allowNull: false
        }, 
        data_cadastro: {
            type: DataType.DATE
        },
        data_ultima_alteracao: {
            type: DataType.DATE
        }

    },
        {
            sequelize,
            modelName: 'Usuario',
            tableName: 'usuarios',
            timestamps: false

    }); 
    
    Usuario.buscarContagem = () =>{
        return Usuario.findAndCountAll();
    };

    Usuario.buscar = (limite, offset) => {
        return Usuario.findAll({
            limit: limite,
            offset: offset
        });
    };

    return Usuario;

};