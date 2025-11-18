const express = require('express');
const PortfolioController = require('../controllers/portfolioController');

const setPortfolioRoutes = (app) => {
    const router = express.Router();
    const portfolioController = new PortfolioController();

    router.get('/portfolio', portfolioController.getPortfolio.bind(portfolioController));
    router.post('/portfolio', portfolioController.createPortfolio.bind(portfolioController));
    router.put('/portfolio/:id', portfolioController.updatePortfolio.bind(portfolioController));
    router.delete('/portfolio/:id', portfolioController.deletePortfolio.bind(portfolioController));

    app.use('/api', router);
};

module.exports = setPortfolioRoutes;