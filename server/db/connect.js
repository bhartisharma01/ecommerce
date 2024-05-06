import mysql from 'mysql2';

const dbConfig = {
    port:process.env.DB_PORT,
    host:process.env.DB_HOST,
    user:'root',
    password:'Bharti@2000',
    database:process.env.DB_NAME,
    connectionLimit:10
};

const db = mysql.createPool(dbConfig);

db.getConnection((error, connection) => {
    if (error) {
        console.error('Database connection failed:', error);
    } else {
        console.log('Database connection successful');
         connection.release();
    }
});


export default db;
