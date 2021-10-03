"use strict";
const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  // Defining a new handler
  // The ctx input object contains the route parameters
  findByCategory: async (ctx) => {
    const { categoryId } = ctx.params;
    const restaurantsByCategory = await strapi
      .query("restaurant")
      .find({ categories: [categoryId] });

    return restaurantsByCategory.map((restaurant) =>
      sanitizeEntity(restaurant, {
        model: strapi.models.restaurant,
      })
    );
  },
};
