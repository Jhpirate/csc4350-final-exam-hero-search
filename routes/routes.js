'use strict';

module.exports = function (app) {
    let controller = require('../controller/superController');

    // Main Index Route (Not necessary here)
    app.route('/')
        .get(controller.show_index_page);


    // Super routes
    app.route('/super')
        .get(controller.get_main_super_search)
        .post(controller.search_for_super)

}