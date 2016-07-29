'use strict';

// comment-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const comment = sequelize.define('comments', {
    content: {
      type: Sequelize.STRING,
      allowNull: false
    },
   authorId: {
      type: Sequelize.STRING,
      allowNull: false
    },
    postId: {
      type: Sequelize.STRING,
      allowNull: true
    }    
  }, {
    freezeTableName: true
  });

  comment.sync();

  return comment;
};
