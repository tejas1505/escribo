import express from 'express';
import executeQuery from '../../utils/executeQuery.js';

const router = express.Router();


router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    console.log(email, password);
    

    const result = await executeQuery('select * from users;');
    res.json({
        status: 1,
        message: "Fetched",
        data: result
    })

})


export default router;