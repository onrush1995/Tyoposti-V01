const signIn = (request, response) => {
    request.send('Sign client');
};
const signUp = (request, response) => {
    request.send('Registered client');
};

const updateClient = (request, response) => {
    request.send('Update client');
};

export { signIn, signUp, updateClient };
