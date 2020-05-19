import Restaurant from '../models/Restaurant';

class RestaurantController {
  async index(req, res) {
    const restaurants = await Restaurant.find();

    return res.json(restaurants);
  }

  async show(req, res) {
    const { id } = req.params;

    const restaurant = await Restaurant.findById(id);

    return res.json(restaurant);
  }

  async store(req, res) {
    const restaurant = await Restaurant.create(req.body);

    return res.json(restaurant);
  }
}

export default new RestaurantController();
