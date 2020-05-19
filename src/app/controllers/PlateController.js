import Plate from '../models/Plate';

class PlateController {
  async index(req, res) {
    const { restaurantId } = req.params;

    const plates = await Plate.find({ restaurantId });

    return res.json(plates);
  }

  async show(req, res) {
    const { plateId } = req.params;

    const plate = await Plate.findById(plateId);

    return res.json(plate);
  }

  async store(req, res) {
    const plate = await Plate.create(req.body);

    return res.json(plate);
  }
}

export default new PlateController();
