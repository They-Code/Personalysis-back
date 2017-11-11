module.exports = function (sequelize, DataTypes) {
    
        var awakensPersonality = sequelize.define("User", {
            name: {type: DataTypes.STRING, allowNull: false},
            id: {type: DataTypes.STRING, allowNull: false},
            agreeableness: {type: DataTypes.STRING, allowNull: true}, 
            neuroticism: {type: DataTypes.STRING, allowNull: true},
            extraversion: {type: DataTypes.STRING, allowNull: true},
            conscientiousness: {type: DataTypes.STRING, allowNull: true},
            openness: {type: DataTypes.STRING, allowNull: true},
            anger: {type: DataTypes.STRING, allowNull: true},
            rewardDependence: {type: DataTypes.STRING, allowNull: true},
            harmAvoidance: {type: DataTypes.STRING, allowNull: true},
            noveltySeeking: {type: DataTypes.STRING, allowNull: true},
            gambling: {type: DataTypes.STRING, allowNull: true}
        })
    
        return awakensPersonality
}
    
       