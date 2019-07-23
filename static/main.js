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

function callback() {
    return (err, data) => {
        if(err) {
            console.log(`Что-то пошло не так ${err}`)
        } else {
           return data  
        }
        
         
    }
}

console.log(ApiConnector.getStocks(callback))
// console.log(ApiConnector.createUser(newPerson, callback))


