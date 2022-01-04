import { Router } from 'express'
import AuthControllers from '../controllers/AuthController'
import { AuthenticableControllers } from '../controllers/AuthenticableControllers'
import { ClientMiddleware } from '../middleware/ClientMiddleware'

const AuthenticableRoutes = Router()


AuthenticableRoutes.post('/login', new AuthenticableControllers().login)
AuthenticableRoutes.get('/verify-token', new ClientMiddleware().ensureAuthenticated, new AuthControllers().verifyToken)
AuthenticableRoutes.get('/token', new ClientMiddleware().ensureAuthenticated, new AuthControllers().getTokenData)






export { AuthenticableRoutes }