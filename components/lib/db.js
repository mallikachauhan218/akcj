import mysql from "mysql2/promise"

let connection;

export const createConnection = async () => {
    if(!connection){
        connection = await mysql.createConnection({
            database : process.env.DATABASE_NAME , 
            host : process.env.DATABASE_HOST,
            user : process.env.DATABASE_USER,
            password : process.env.DATABASE_PASSWORD
        })
    }

    return connection;
}

// Add this missing export to fix the compilation error
export const closeConnection = async () => {
    if (connection) {
        await connection.end();
        connection = null; // Reset the variable so it can re-open on the next request
    }
}