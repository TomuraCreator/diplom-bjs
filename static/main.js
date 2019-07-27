
class Profile {
    constructor(obj) 
    {
        this.username = obj.username,
        this.name = {firstName: obj.name.firstName, lastName:  obj.name.lastName},      
        this.password = obj.password
    } 
    createUser(callback) {
        console.log(`Create user ${this.username}`)
        ApiConnector.createUser({username: this.username,
        name: this.name,
        password: this.password }, (err, data) => {
            callback(err,data)
        })
    }
    performLogin(callback) {
        console.log(`Authorizing user ${this.username}`)
        ApiConnector.performLogin ({username: this.username, password: this.password}, (err, data) => {
            console.log(`${this.username} is authirized`);
            callback(err, data);
        });
            
    } 
    addMoney({currency, amount}, callback) {
        
        ApiConnector.addMoney({currency, amount}, (err, data) => {
            if(err) console.error(`Error during adding money`);
            console.log(`Added ${amount + currency}`);
            callback(err, data)
        })
    }
    convertValute({fromCurrency, targetCurrency, targetAmount}, callback) {
        ApiConnector.convertMoney({fromCurrency, targetCurrency, targetAmount}, (err, data) => {
            console.log(`Money converted to netcoin`)
            callback(err, data)
            console.log(`Added money`)
        })
    }
    transferMoney({to, amount}, callback) {
        ApiConnector.transferMoney({to, amount}, (err, data)=> {
            
            callback(err, data)
        })
    }
}


function getStocks(callback) {
    ApiConnector.getStocks((err, data) => {
        if(err) throw err;
        callback(err, data);
    }); 
} // 

function main() {
    const NewPerson = new Profile({
        username: 'Tomura',
        name: { firstName: 'Влад', lastName: 'Уткин' }, password: 'qwerty'
    })
    const FriendPerson = new Profile({
        username: 'koresh',
        name: {firstName: 'Иван', lastName: 'Иванов'}, password: '1111'
    })
    getStocks((err, data) => {
        if(err) throw err;
        let array1 = [];
        let log = [];
        data.forEach((element, array) => {
            log.push(element.EUR_NETCOIN);
        })
        array1.push((log.sort((a,b)=> a-b))[0]) // только выгодный курс в нашем банке (работаем в убыток - цените!) 
        const values = {currency: 'EUR', amount: 123456}
            NewPerson.createUser((err, data) => {
                if(err) throw err;
                NewPerson.performLogin((err, data) => {
                    if(err) throw err;
                    NewPerson.addMoney(values, (err, data)=> {
                        if(err) throw err;
                        NewPerson.convertValute({fromCurrency: values.currency, targetCurrency: 'NETCOIN', targetAmount: Number(array1[0]) * values.amount}, (err, data)=> {
                            if(err) throw err;
                            FriendPerson.createUser((err, data)=>{
                                if(err) throw err;
                                    if(err) throw err;
                                    NewPerson.transferMoney({to: 'koresh', amount: 500}, (err, data)=> {
                                        if(err) throw err
                                        console.log(`Money transfered`);
                                })
                            })
                        })
                    })
                })
            })
        })
}
main();
