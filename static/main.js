class Profile {
    constructor(obj) 
    {
        this.username = obj.username,
        this.name = {firstName: obj.name.firstName, lastName:  obj.name.lastName},      
        this.password = obj.password
    } 
    addNewPerson() {
        console.log('Создаём пользователя.')
        ApiConnector.createUser({username: this.username,
        name: this.name,
        password: this.password }, (err, data) => {
            
            if (err) throw err;
            this.autorizationNewPerson();
            console.log('Авторизация...')

        })
    }
    autorizationNewPerson() {
        ApiConnector.performLogin ({username: this.username, password: this.password}, (err, data) => {
            if (err) throw err;
            console.log("Авторизация прошла успешно");
            
            
        });
            
    } 
    addMoney({valute, amount}) {

    }
}

function getStocks(num ,callback) {
    ApiConnector.getStocks((err, data) => {
        console.log(`Getting stocks info`);
        array.push(callback(err, data[num]));
    });
    return array.map((currentValue) => currentValue)
}

const newPerson = new Profile({
    username: 'Tomura',
    name: { firstName: 'Влад', lastName: 'Уткин' }, password: 'qwerty'
})
// newPerson.addNewPerson();
newPerson.addNewPerson(newPerson.autorizationNewPerson);

// console.dir(newPerson)
