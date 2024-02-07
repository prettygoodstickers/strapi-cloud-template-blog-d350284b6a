'use strict';

/**
 * product-post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product-post.product-post');
