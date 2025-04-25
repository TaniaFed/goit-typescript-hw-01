type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<User>) {
    const defoultUser: User = {
        name: '',
        surname: '',
        email: '',
        password: '',
    }
    return {
        ...defoultUser,
        ...initialValues,
    }
}

const updatedUser = createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});

// console.log(updatedUser);

export {updatedUser};