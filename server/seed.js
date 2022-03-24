 
 require('dotenv').config()
 const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});
 

module.exports = {
 seed: (req,res) => {
        sequelize.query(`
        create table books(
            book_id serial primary key,
            title varchar,
            price varchar,
            imageUrl varchar);

        `)
        .then(() => {
            console.log("DB seeded!")
            res.sendStatus(200)
        }).catch(err => console.log('error seedingDB', err))
    }
    }

      
    
