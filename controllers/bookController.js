const Book = require('../models/Book')

const list = (req, res) => {
    Book.find().then((result) => {
        res.render('index', {books: result})
    })
}

const create = (req, res) => {
    res.render('create')
}
const store = (req, res) => {
    const book = new Book(req.body);
    book.save()
        .then(result => {
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
        });
}


module.exports = {
    list,
    create,
    store
}