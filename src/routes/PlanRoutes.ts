import { Router } from 'express'
import { PlanControllers } from '../controllers/PlanControllers'
import { ClientMiddleware } from '../middleware/ClientMiddleware'


const PlanRoutes = Router()

PlanRoutes.get('/plan', new ClientMiddleware().ensureAuthenticated, new PlanControllers().readAll)
PlanRoutes.post('/plan', new ClientMiddleware().ensureAuthenticated, new PlanControllers().create)
PlanRoutes.get('/plan/:id', new ClientMiddleware().ensureAuthenticated, new PlanControllers().readOne)
PlanRoutes.delete('/plan/:id', new ClientMiddleware().ensureAuthenticated, new PlanControllers().delete)
PlanRoutes.put('/plan/:id', new ClientMiddleware().ensureAuthenticated, new PlanControllers().update)












export { PlanRoutes }