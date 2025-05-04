class MarketPlace{
    constructor(id, marketplace_file, market_value, user_id, pattern_id){
        this.id = id;
        this.marketplace_file = marketplace_file;
        this.market_value = market_value;
        this.user_id = user_id;
        this.pattern_id = pattern_id;
    }
}

module.exports = MarketPlace;