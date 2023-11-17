const express = require('express');
const router = express.Router();

const flowTypeRouter = require('./flowTypeRouter');
const categoryRouter = require('./categoryRouter');
const usersFamilyRouter = require('./usersFamilyRouter');
const fixedMoneyFlowRouter = require('./fixedMoneyFlowRouter');
const budgetRouter = require('./budgetRouter');
const allowanceRouter = require('./allowanceRouter');

router.use('/flow-type', flowTypeRouter.router);
router.use('/category', categoryRouter.router);
router.use('/family', usersFamilyRouter.router);
router.use('/flow/fixed', fixedMoneyFlowRouter.router);
router.use('/budget', budgetRouter.router);
router.use('/allowance', allowanceRouter.router)


module.exports = router;