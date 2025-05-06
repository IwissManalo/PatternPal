class User {
    constructor(
        id,
        first_name,
        last_name,
        username,
        email,
        password,
        phone_number,
        account_role,
        user_credit,
        email_verification_token,
        email_verified,
        phone_verification_token,
        phone_verified
    ) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.phone_number = phone_number;
        this.account_role = account_role;
        this.user_credit = user_credit;
        this.email_verification_token = email_verification_token;
        this.email_verified = email_verified;
        this.phone_verification_token = phone_verification_token;
        this.phone_verified = phone_verified;
    }
}

module.exports = User;
