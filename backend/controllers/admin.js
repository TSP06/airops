const jwt = require('jsonwebtoken');
const secretKey = process.env.secretKey;

const adminLogin = async (req, res) => {
    const { username, password } = req.body;
    // Replace this with your admin credentials verification logic
    if (username === 'admin' && password === 'password') {
        const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
        res.header('Authorization',token).send(token);

    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};


module.exports = adminLogin;
