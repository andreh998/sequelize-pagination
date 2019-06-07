const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

const sequelize = new Sequelize('chamados', 'root', 'andre@123', {
    host: '192.168.5.120',
    dialect: 'mysql'
});

const loadModels = (sequelize) => {
    const dir = path.join(__dirname, '../app/models');
    let models = [];
    fs.readdirSync(dir).forEach(file => {
        const modelDir = path.join(dir, file);
        model = sequelize.import(modelDir);
        models[model.name] = model;
    });
    return models;
};

database = {sequelize, Sequelize, models: loadModels(sequelize)};

module.exports = database;