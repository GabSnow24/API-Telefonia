import { Router } from 'express'
import { TaxControllers } from '../controllers/TaxControllers'
import { ClientMiddleware } from '../middleware/ClientMiddleware'


const TaxRoutes = Router()

TaxRoutes.get('/tax', new ClientMiddleware().ensureAuthenticated, new TaxControllers().readAll)
TaxRoutes.post('/tax', new ClientMiddleware().ensureAuthenticated, new TaxControllers().create)
TaxRoutes.get('/tax/:id', new ClientMiddleware().ensureAuthenticated, new TaxControllers().readOne)
TaxRoutes.delete('/tax/:id', new ClientMiddleware().ensureAuthenticated, new TaxControllers().delete)
TaxRoutes.put('/tax/:id', new ClientMiddleware().ensureAuthenticated, new TaxControllers().update)












export { TaxRoutes }