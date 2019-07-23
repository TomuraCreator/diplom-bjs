class Profile {
    constructor({
        username,
        name: { firstName, lastName },
        password,
    }) {
        this.username = username,
        this.name = {firstName: firstName, lastName: lastName},      
        this.password = password

    }
}

// function getExchangeRates() {
//     const exchangeValute = ApiConnector.getStocks((err, data) => {
//         if (err) {
//             console.error('Error during adding money to Ivan');
//         } else {
//             return data[0];
//         }

//     });
//     console.log(exchangeValute);
// }
const newPerson = new Profile({
    username: 'werwe',
    name: { firstName: 'Влад', lastName: 'Уткин' },
    password: '123123'
})

function callbackFunction() {
    
    return (err, data) => {
        if (err) {
            console.log(error)
        } else {
            console.log(data)
        }
    }
}


// console.log(ApiConnector.getStocks(callback(err, data)))
console.log(ApiConnector.createUser(newPerson, callbackFunction('Всё очень плохо', 'Выполнение запроса')))
