const {DBClient} = require('../DBClient');

exports.getByUsername = async (username) => {
    const user = await DBClient.getInstance().prisma.user.findUnique({
        where: {
          username: username
        },
    });
    return user;
}

exports.getById = async (id) => {
    const user = await DBClient.getInstance().prisma.user.findUnique({
        where: {
          id: id
        },
    });
    return user;
}

exports.add = async (user) => {
    return await DBClient.getInstance().prisma.user.create({
        data: {
            username: user.username,
            password: user.password,
            email: user.email,
        },
    });
}




