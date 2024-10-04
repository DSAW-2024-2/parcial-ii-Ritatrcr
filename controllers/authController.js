const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const user = {
    email: 'admin@admin.com',
    password: 'admin'  
};

exports.login = (req, res) => {
    const { email, password } = req.body;

    if (email === user.email && password === user.password) {
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });
        return res.json({ token });
    }

    // If info is not correct
    return res.status(401).json({ error: 'Credenciales incorrectas' });
};
