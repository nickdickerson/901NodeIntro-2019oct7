module.exports = class Band{
    constructor(name, members){
        this.name = name;
        this.members=members;
    }

    memberCount(){
        return this.members.length;
    }

    hasMember(guy){
        return this.members.indexOf(guy)>-1;
    }
}