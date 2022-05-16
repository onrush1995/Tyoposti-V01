const login = (req, res) => {
    res.send('Sign client');
};
const register = (req, res) => {
    res.send('Registered client');
};

const updateUser = (req, res) => {
    res.send('Update client');
};

export { login, register, updateUser };
