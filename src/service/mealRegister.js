import database from "../repository/connection.js"

async function getRegister() {
    const todayDate = new Date().toISOString().split('T')[0];

    const sql = `
        SELECT p.name, r.day, r.status from tbl_meal_plan p 
        LEFT JOIN tbl_meal_register r ON r.id_plan = p.id_plan AND r.day = ?
        WHERE p.id_pacient = 1 
    `
    const data = [todayDate]

    const [rows] = await database.query(sql, data)

    return rows
}

export default { getRegister }