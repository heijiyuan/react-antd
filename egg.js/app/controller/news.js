'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    // const { ctx } = this;
    this.ctx.body = 'hi, egg2';
  }
}

module.exports = NewsController;

