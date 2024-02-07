'use strict';

/**
 * global-post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-post.global-post');
