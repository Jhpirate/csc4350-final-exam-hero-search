'use strict';

const SuperHero = require("../model/superHero");
exports.show_index_page = function (req, res) {

    // redirect all incoming / request to super
    res.redirect('/super');
};

// Render the main route to /super
// This is just the search by age page
exports.get_main_super_search = function (req, res) {
    res.render('superHeroSearch', {
        title: 'Search',
        pretty: true,
    });
};


exports.search_for_super = function (req, res) {

    // get the data from the form
    let age = req.body.heroAge;

    // check and make sure age is not null or less than 0
    if (age < 0 || age === "" || age === " " || age === null) {
        // send error message if age is not valid
        res.render('error', {pretty: true});

    } else {
        // search for the super hero (data is good)

        // pass the data to the model
        SuperHero.findHero(age, function (err, data) {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                // render the view with the data
                res.render('superHeroSearchResults', {
                    searchedAge: age,
                    heroResults: data,
                    pretty: true,
                });
            }
        });
    }
};
