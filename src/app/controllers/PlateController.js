import Plate from '../models/Plate';

class PlateController {
  async index(req, res) {
    const { restaurantId } = req.params;

    const plates = Plate.find({ restaurantId });

    return res.json(plates);
  }

  async show(req, res) {
    const { plateId } = req.params;

    const plate = Plate.findById(plateId);

    return res.json(plate);
  }
}

export default new PlateController();
