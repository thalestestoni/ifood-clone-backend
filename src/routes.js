import { Router } from 'express';

import RestaurantController from './app/controllers/RestaurantController';
import PlateController from './app/controllers/PlateController';

const routes = new Router();

routes.get('/restaurants', RestaurantController.index);
routes.get('/restaurants/:id', RestaurantController.show);
routes.post('/restaurants', RestaurantController.store);

routes.get('/plates/restaurant/:restaurantId', PlateController.index);
routes.get('/plates/:plateId', PlateController.show);
routes.post('/plates', PlateController.store);

export default routes;
