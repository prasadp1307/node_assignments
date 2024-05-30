const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/userExpense');

router.get('/get-expenses', expenseController.getExpenses);
router.post('/add-expense', expenseController.addExpense);
router.delete('/delete-expense/:id', expenseController.deleteExpense);

module.exports = router;
