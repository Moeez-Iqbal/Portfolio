import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";


const ProjectModel = sequelize.define('Portfolio', {

    name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      features: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: false
      },
      tools: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
      },
      sourceCode: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      sequelize,
      modelName: 'Project',
    });
  
    
    export default ProjectModel;