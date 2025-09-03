// @ts-ignore

let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

user = {
  name: 'John',
  age: 30,
  isAdmin: true,
  id: `abc`,
};

let hobbies: Array<string>;

hobbies = ['reading', 'swimming', 'eating'];

function add(a: number, b: number) {
  const result = a + b;
  return result;
}

type AddFn = (a: number, b: number) => number;

function calculate(
    a: number,
    b: number,
    calcFn: AddFn,
) {
  calcFn(a, b);
}

calculate(1, 2, add);

interface Credentials {
  email: string;
  password: string;
}

class AuthCredentials implements Credentials {
  password: string;
  email: string;
  username: string;
}

type Admin = {
  permissions: string[];
}

type AppUser = {
  userName: string;
}

type AppAdmin = AppUser & Admin;

let admin: AppAdmin;

admin = {
  userName: 'John',
  permissions: ['read', 'write'],
};
