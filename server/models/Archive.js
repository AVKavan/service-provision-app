import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js'; // Path to your sequelize instance
import Service from './Service.js'; // Import the Service model

const Archive = sequelize.define('Archive', {
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    customer_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    service_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Service, // Reference the Service model
            key: 'id',
        },
        allowNull: false
    },
    plan_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    feedback: {
        type: DataTypes.STRING,
        allowNull: true, // Optional field
    },
    features: {
        type: DataTypes.TEXT,
        allowNull: true // Assuming features are optional
    }
}, {
    timestamps: true // Enable createdAt and updatedAt
});


// Archive model
Service.hasMany(Archive, { foreignKey: 'service_id' });   
Archive.belongsTo(Service, { foreignKey: 'service_id' });


export default Archive;
