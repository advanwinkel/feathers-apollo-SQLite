'use strict';

// post-model.js - A sequelize model
// 
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const post = sequelize.define('posts', {
    title: {
      type: Sequelize.STRING,
      allowNull: true
    },
    category: {
      type: Sequelize.STRING,
      allowNull: true
    },
    summary: {
      type: Sequelize.STRING,
      allowNull: true
    },
    content: {
      type: Sequelize.STRING,
      allowNull: false
    },
    authorId: {
      type: Sequelize.STRING,
      allowNull: true
    }
  }, {
    freezeTableName: true
  });

  post.sync();

  return post;
};
