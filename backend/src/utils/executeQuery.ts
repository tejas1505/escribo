import pool from '../db/pg.js'

const executeQuery = async (query: string, values?: any[]) => {
    try {
        const result = await pool.query(query, values);
        return result;
    } catch (error) {
        console.error('Error executing query:', error);
        throw error;
    }
}

export default executeQuery;