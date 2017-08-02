var express = require('express');

var bookRouter = express.Router();


var books = [{
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Lev Tolstoy',
        reade: false

    },
    {
        title: 'Les Miserables',
        genre: 'Historical Fiction',
        author: 'Victor Hugo',
        reade: false

    },
    {
        title: 'The Time Machine',
        genre: 'Science Fiction',
        author: 'H. G. Wells',
        reade: false

    },
    {
        title: 'The Dark World',
        genre: 'Fantasy',
        author: 'Henry Kuttner',
        reade: false

    }

];

bookRouter.route('/')
    .get(function(req, res) {
        res.render('Books', {
            title: 'Books',
            nav: [{
                    Link: '/Books',
                    Text: 'Books'
                },
                {
                    Link: '/Authors',
                    Text: 'Authors'
                }
            ],
            books: books
        });
    });

bookRouter.route('/Single')
    .get(function(req, res) {
        res.send('Single Book');
    });


module.exports = bookRouter;