const MovieModel = require('@/src/models/Movie');

module.exports = {

  async index(req, res) {

    try {
      const { rows, count } = await MovieModel.findAndCountAll();
      return res.json({ data: { rows, count } });

    } catch (e) {
      return res.status(400).json({ error: e });
    }

  },

  async get(req, res) {
    try {
      const { id } = req.params;
      const result = await MovieModel.findByPk(id);

      if (!result) {
        return res.status(400).json({ error: 'Movie not found' });
      }

      return res.json({ data: result });

    } catch (e) {
      return res.status(400).json({ error: e });
    }
  },

  async create(req, res) {
    const t = await MovieModel.sequelize.transaction();

    try {
      const { ...data } = req.body;
      const movie = await MovieModel.create(data, { transaction: t });
      await t.commit();

      return res.json({ data: movie });

    } catch (e) {
      return res.status(400).json({ error: e });
    }

  }

};
