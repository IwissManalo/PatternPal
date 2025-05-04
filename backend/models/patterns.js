class Pattern{
    constructor(id, pattern_name, pattern_file, pattern_description, pattern_type, pattern_value){
        this.id = id;
        this.pattern_name = pattern_name;
        this.pattern_file = pattern_file;
        this.pattern_description = pattern_description;
        this.pattern_type = pattern_type;
        this.pattern_value = pattern_value;
    }
}

module.exports = Pattern;