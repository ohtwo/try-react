var user;
user = {
    name: 'John',
    age: 30,
    isAdmin: true,
    id: "abc",
};
var hobbies;
hobbies = ['reading', 'swimming', 'eating'];
function add(a, b) {
    var result = a + b;
    return result;
}
function calculate(a, b, calcFn) {
    calcFn(a, b);
}
calculate(1, 2, add);
var creds;
creds = { email: '', password: '' };
