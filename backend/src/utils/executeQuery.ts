import pool from '../db/pg.js'

const executeQuery = async (query: string, values?: any[]) => {
    const client = await pool.connect();
    try {
        const result = await client.query(query, values);
        return result;
    } catch (error) {
        console.error('Error executing query:', error);
        throw error;
    } finally {
        client.release();
    }
}

export default executeQuery;