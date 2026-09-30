import database from "../repository/connection.js"

async function getPlan(id_user){
    const sql = "SELECT * FROM tbl_meal_plan WHERE id_pacient = ?"
    const data = [id_user]

    const [rows] = await database.query(sql, data)

    return rows
}

export default { getPlan }