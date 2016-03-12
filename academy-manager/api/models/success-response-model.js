'use strict';

var success = {}
  , debug = require('../config/debug-config')('api:success');

function send(req, res) {
  if(this.messageIds) {
    this.messages = [];

    for (var i = 0; i < this.messageIds.length; i++) {
      let _messageId = this.messageIds[i];
      this.messages.push(req.getMessage(_messageId));
    }
  }

  debug(this);
  res.status(this.statusCode || 500).json(this);
};

success.Inserted = function(id) {
  this.data = id;
  this.messageIds = ['record-success-inserted'];
  this.statusCode = 201;
  this.send = send;
};

success.Updated = function(id) {
  this.data = id;
  this.messageIds = ['record-success-updated'];
  this.statusCode = 200;
  this.send = send;
};

success.Removed = function() {
  this.messageIds = ['record-success-removed'];
  this.statusCode = 200;
  this.send = send;
}

success.FindOne = function(data) {
  this.data = data;
  this.statusCode = 200;
  this.send = send;
}

success.FindMany = function(data) {
  this.data = data;
  this.statusCode = 200;
  this.send = send;
}

module.exports = success;
