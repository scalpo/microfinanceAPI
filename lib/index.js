'use strict';

module.exports = {
    setup: function(app) {

        //API
        app.get('/', function(req, res) {
            //res.contentType('application/html')
            res.send(module.exports.setup.toString())
        });
        
        //SOURCE: http://build.kiva.org/api
        //Lenders
        app.get('/lenders/:lender_ids', function(req, res) { res.send('/lenders/:lender_ids') });
        app.get('/lenders/:lender_id/loans', function(req, res) { res.send('/lenders/:lender_id/loans') });
        app.get('/lenders/:lender_id/teams', function(req, res) { res.send('/lenders/:lender_id/teams') });
        app.get('/lenders/newest', function(req, res) { res.send('/lenders/newest') });
        app.get('/lenders/search', function(req, res) { res.send('/lenders/search') });

        //LendingActions
        app.get('/lending_actions/recent', function(req, res) { res.send('/lending_actions/recent') });

        //Loans
        app.get('/loans/:ids', function(req, res) { res.send('/loans/:ids') });
        app.get('/loans/:id/journal_entries', function(req, res) { res.send('/loans/:id/journal_entries') });
        app.get('/loans/:id/lenders', function(req, res) { res.send('/loans/:id/lenders') });
        app.get('/loans/:id/repayments', function(req, res) { res.send('/loans/:id/repayments') });
        app.get('/loans/:id/similar', function(req, res) { res.send('/loans/:id/similar') });
        app.get('/loans/:id/teams', function(req, res) { res.send('/loans/:id/teams') });
        app.get('/loans/newest', function(req, res) { res.send('/loans/newest') });
        app.get('/loans/search', function(req, res) { res.send('/loans/search') });

        //Methods
        app.get('/methods', function(req, res) { res.send('/methods') });
        app.get('/methods/:ids', function(req, res) { res.send('/methods/:ids') });

        //My
        app.get('/my/account', function(req, res) { res.send('/my/account') });
        app.get('/my/balance', function(req, res) { res.send('/my/balance') });
        app.get('/my/email', function(req, res) { res.send('/my/email') });
        app.get('/my/expected_repayments', function(req, res) { res.send('/my/expected_repayments') });
        app.get('/my/lender', function(req, res) { res.send('/my/lender') });
        app.get('/my/loans', function(req, res) { res.send('/my/laons') });
        app.get('/my/loans/:ids', function(req, res) { res.send('/my/loans/:ids') });
        app.get('/my/loans/:ids/balances', function(req, res) { res.send('/my/loans/:ids/balances') });
        app.get('/my/stats', function(req, res) { res.send('/my/stats') });
        app.get('/my/teams', function(req, res) { res.send('/my/teams') });

        //Partners
        app.get('/partners', function(req, res) { res.send('/partners') });
        app.get('/partners/:ids', function(req, res) { res.send('/partners/:ids') });

        //Releases
        app.get('/releases/api/current', function(req, res) { res.send('/releases/api/current') });

    }
}

