const authenticationRouter = require("./authen/auth.route")
const bookRouter = require("./book/book.route")
const bookBorrowRouter = require("./bookBorrow/bookBorrow.route")
const publisherRouter = require("./publisher/publisher.route")
module.exports = (app) =>{
    app.use('/authen', authenticationRouter)
    app.use('/book', bookRouter)
    app.use('/borrow', bookBorrowRouter)
    app.use('/publisher', publisherRouter)
}