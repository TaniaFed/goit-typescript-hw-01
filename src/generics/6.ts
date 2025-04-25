type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Реалізуйте Params так, 
// щоб унеможливити поле 'errors' з типу Form
type Params = Omit<Form, 'errors'>;

function createParams(initialValues: Partial<Params>) {
    const defoultParams: Params= {
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
    }
    return {
        ...defoultParams,
        ...initialValues,
    }
}

const updatedParams = createParams({ 
    email: 'mail@mail.com',
    firstName: 'Mia',
    lastName: 'Love',
    phone: '312-546-6546', 
});

console.log(updatedParams);

// export { Params};