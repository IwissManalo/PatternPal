class Community{
    constructor(id, community_name, community_description, user_role, community_comment){
        this.id = id;
        this.community_name = community_name;
        this.community_description = community_description;
        this.user_role = user_role;
        this.community_comment = community_comment;
    }
}

module.exports = Community;