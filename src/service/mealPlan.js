import database from "../repository/connection.js"

async function getPlan(){
    const sql = "SELECT * FROM tbl_meal_plan WHERE id_pacient = 1"

    const [rows] = await database.query(sql)

    return rows
}

export default { getPlan }