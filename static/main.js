
class Profile {
    constructor(obj) 
    {
        this.username = obj.username,
        this.name = {firstName: obj.name.firstName, lastName:  obj.name.lastName},      
        this.password = obj.password
    }
    createUser(callback) {
        console.log(`Create user ${this.username} (¬‿¬) \n %c...`, `color: 	#CC6600`);
        ApiConnector.createUser({username: this.username,
        name: this.name,
        password: this.password }, (err, data) => {
            console.log(`%c User ${this.username} created succesfully!(─‿‿─)`, `background: #000000; color: 	#CCFFCC;`);
            callback(err,data)
        });
    }
    performLogin(callback) {
        console.log(`Authorizing user ${this.username} (◕‿◕) \n %c...`, `color: #CC6600`)
        ApiConnector.performLogin ({username: this.username, password: this.password}, (err, data) => {
            console.log(`%c ${this.username} authirized successfully! (─‿‿─)`, `background: #000000; color: #CCFFCC;`);
            callback(err, data);
        });      
    } 
    addMoney({currency, amount}, callback) {
        console.log(`We add ${amount + currency} to the account. (；一_一) \n %c...`, `color: #CC6600`);
        ApiConnector.addMoney({currency, amount}, (err, data) => {
            if(err) throw err;
            console.log(`%c Great! The operation was successful (づ￣ ³￣)づ`, `background: #000000; color: 	#CCFFCC;` )
            callback(err, data)
        })
    }
    convertValute({fromCurrency, targetCurrency, targetAmount}, callback) {
        console.log(`Money converted to netcoin (❍ᴥ❍ʋ) \n %c...` , `color: #CC6600`)
        ApiConnector.convertMoney({fromCurrency, targetCurrency, targetAmount}, (err, data) => {
            console.log(`%c Conversion successfully completed (ᵔᴥᵔ) `, `background: #000000; color: 	#CCFFCC;`)
            callback(err, data)
        })
    }
    transferMoney({to, amount}, callback) {
        console.log(`Transfer funds, please wait ◉_◉ \n %c...` , `color: #CC6600`)
        ApiConnector.transferMoney({to, amount}, (err, data)=> {
            callback(err, data)
            console.log(`%cMoney transfered succesfully ʕ•ᴥ•ʔ`, `background: #000000; color: 	#CCFFCC;`);
        })
    }
}

function getStocks(callback) {
    ApiConnector.getStocks((err, data) => {
        if(err) throw err;
        callback(err, data);
    }); 
} 

function main() {
    const NewPerson = new Profile({
        username: 'Tomura',
        name: {firstName: 'Влад', lastName: 'Уткин'}, password: 'qwerty'
    })
    const FriendPerson = new Profile({
        username: 'koresh',
        name: {firstName: 'Иван', lastName: 'Иванов'}, password: '1111'
    })
    getStocks((err, data) => {
        if(err) throw err;
        let array1 = [{currency: 'EUR', amount: 123456}];
        data.forEach((element, array) => array1.push(element.EUR_NETCOIN));
        array1.push((array1.sort((a,b)=> a-b))[1]); // только выгодный курс в нашем банке (работаем в убыток - цените!)
            NewPerson.createUser((err, data) => {
                if(err) throw err;
                NewPerson.performLogin((err, data) => {
                    if(err) throw err;
                    NewPerson.addMoney(array1[0], (err, data)=> {
                        if(err) throw err;
                        NewPerson.convertValute({fromCurrency: array1[0].currency, targetCurrency: 'NETCOIN', targetAmount: Number(array1[1]) * array1[0].amount}, (err, data)=> {
                            if(err) throw err;
                            FriendPerson.createUser((err, data)=>{
                                if(err) throw err;
                                    NewPerson.transferMoney({to: 'koresh', amount: 500}, (err, data)=> {
                                        if(err) throw err
                                })
                            })
                        })
                    })
                })
            })
        })
}
main();
