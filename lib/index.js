'use strict';

module.exports = {
    setup: function(app) {

        //API
        app.get('/', (req, res) => {
            //res.contentType('application/html')
            res.send(module.exports.setup.toString())
        })
        
        //SOURCE: http://build.kiva.org/api
        //Lenders
        app.get('/lenders/:lender_ids', (req, res) => res.send('/lenders/:lender_ids'))
        app.get('/lenders/:lender_id/loans', (req, res) => res.send('/lenders/:lender_id/loans'))
        app.get('/lenders/:lender_id/teams', (req, res) => res.send('/lenders/:lender_id/teams'))
        app.get('/lenders/newest', (req, res) => res.send('/lenders/newest'))
        app.get('/lenders/search', (req, res) => res.send('/lenders/search'))

        //LendingActions
        app.get('/lending_actions/recent', (req, res) => res.send('/lending_actions/recent'))

        //Loans
        app.get('/loans/:ids', (req, res) => res.send('/loans/:ids'))
        app.get('/loans/:id/journal_entries', (req, res) => res.send('/loans/:id/journal_entries'))
        app.get('/loans/:id/lenders', (req, res) => res.send('/loans/:id/lenders'))
        app.get('/loans/:id/repayments', (req, res) => res.send('/loans/:id/repayments'))
        app.get('/loans/:id/similar', (req, res) => res.send('/loans/:id/similar'))
        app.get('/loans/:id/teams', (req, res) => res.send('/loans/:id/teams'))
        app.get('/loans/newest', (req, res) => res.send('/loans/newest'))
        app.get('/loans/search', (req, res) => res.send('/loans/search'))

        //Methods
        app.get('/methods', (req, res) => res.send('/methods'))
        app.get('/methods/:ids', (req, res) => res.send('/methods/:ids'))

        //My
        app.get('/my/account', (req, res) => res.send('/my/account'))
        app.get('/my/balance', (req, res) => res.send('/my/balance'))
        app.get('/my/email', (req, res) => res.send('/my/email'))
        app.get('/my/expected_repayments', (req, res) => res.send('/my/expected_repayments'))
        app.get('/my/lender', (req, res) => res.send('/my/lender'))
        app.get('/my/loans', (req, res) => res.send('/my/laons'))
        app.get('/my/loans/:ids', (req, res) => res.send('/my/loans/:ids'))
        app.get('/my/loans/:ids/balances', (req, res) => res.send('/my/loans/:ids/balances'))
        app.get('/my/stats', (req, res) => res.send('/my/stats'))
        app.get('/my/teams', (req, res) => res.send('/my/teams'))

        //Partners
        app.get('/partners', (req, res) => res.send('/partners'))
        app.get('/partners/:ids', (req, res) => res.send('/partners/:ids'))

        //Releases
        app.get('/releases/api/current', (req, res) => res.send('/releases/api/current'))

    }
}

