
function createAccount(Name, initialBalance) {
    return {
        accountHolder: Name,
        balance: initialBalance
    };
}


function getAccountDetails(account) {
    return `Account Holder: ${account.accountHolder}, Balance: Rs${account.balance}`;
}


function deposit(account, amount) {
    if (amount > 0) {
        account.balance += amount;
        console.log(`Successfully deposited Rs${amount}. New Balance: Rs${account.balance}`);
    } else {
        console.log('Deposit amount must be positive.');
    }
}

function withdraw(account, amount) {
    if (amount > 0 && amount <= account.balance) {
        account.balance -= amount;
        console.log(`Successfully withdrew Rs${amount}. New Balance: Rs${account.balance}`);
    } else if (amount > account.balance) {
        console.log('Insufficient balance.');
    } else {
        console.log('Withdrawal amount must be positive.');
    }
}

const myAccount = createAccount('Shreyansh Gupta', 500);
console.log(getAccountDetails(myAccount)); 
deposit(myAccount, 200); 
withdraw(myAccount, 100); 
withdraw(myAccount, 700); 
console.log(getAccountDetails(myAccount));

