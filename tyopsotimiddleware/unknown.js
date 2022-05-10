const unknownMiddleware = (req, res) => {
    res.status(404).send('The requested URL was not found on this server.');
};

export default unknownMiddleware;
