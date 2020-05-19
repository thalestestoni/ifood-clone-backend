import { Router } from 'express';

import RestaurantController from './app/controllers/RestaurantController';
import PlateController from './app/controllers/PlateController';

const routes = new Router();

routes.get('/restaurants', RestaurantController.index);
routes.get('/restaurants/:id', RestaurantController.show);

routes.get('/plates/:restaurantId', PlateController.index);
routes.get('/plates/:id', PlateController.show);

export default routes;
