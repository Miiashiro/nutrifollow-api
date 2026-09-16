import database from "../repository/connection.js"

async function login(email, password){
    const sql = 'SELECT id_user, name, password FROM tbl_users WHERE email = ? AND password = ?'
    const data = [email, password]

    const [rows] = await database.query(sql, data)
    return rows
}

export default {login}