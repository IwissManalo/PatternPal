class User{
    constructor(id, first_name, last_name, username, email, password, phone_number, account_role, user_credit){
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.phone_number = phone_number;
        this.account_role = account_role;
        this.user_credit = user_credit;
    }
}

module.exports = User;