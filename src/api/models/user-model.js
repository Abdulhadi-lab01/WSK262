const userItems = [
    {
        user_id: 3609,
        name: 'John Doe',
        username: 'johndoe',
        email: 'john@metropolia.fi',
        role: 'user',
        password: 'password',
    },
    {
        user_id: 3610,
        name: 'Jane Smith',
        username: 'janesmith',
        email: 'jane@metropolia.fi',
        role: 'admin',
        password: 'password123',
    },
];

// get all users
const listAllUsers = () => {
    return userItems;
};

// get user by id
const findUserById = (id) => {
    return userItems.find((user) => user.user_id === id);
};

// add new user
const addUser = (user) => {
    const {name, username, email, role, password} = user;
    const newId = userItems[0].user_id + 1;

    userItems.unshift({
        user_id: newId,
        name,
        username,
        email,
        role,
        password,
    });

    return {user_id: newId};
};

export {listAllUsers, findUserById, addUser};