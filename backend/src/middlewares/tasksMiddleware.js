const validateBody = (request, response, next) => {
    const { body } = request;
    if (body.title === undefined) {
        return response.status(400).json({ message: 'O campo Título é obrigatório' });
    }

    if (body.title === '') {
        return response.status(400).json({ message: 'O campo Título não pode ser vazio' });
    }

    next();

};

module.exports = {
    validateBody
}