function Band(name, members){
    this.name = name;
    this.members=members;
}

Band.prototype.memberCount = function(){
    return this.members.length;
}

Band.prototype.hasMember = function(guy){
    return this.members.indexOf(guy)>-1;
}

module.exports = Band;