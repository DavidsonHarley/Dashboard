const router = require('express').Router();

const { Detail, Category } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const category = await Category.findAll({ include: [Detail] });
    res.json(category);
  } catch (error) {
    console.log(error);
  }
});

router.get('/detail', async (req, res) => {
  try {
    const detail = await Detail.findAll({ include: [Category] });
    const nameCategory = detail.map((el) => el.Category.dataValues);
    res.json({
      detail,
      nameCategory,
    });
  } catch (error) {
    console.log(error);
  }
});

router.post('/detailCreate', async (req, res) => {
  try {
    const { detail, categoryID, price } = req.body;
    const newDetail = await Detail.create({ detail, categoryID, price });
  } catch (error) {
    console.log(error);
  }
});
router.delete('/delete', async (req, res) => {
  try {
    const { id } = req.body;
    const deleteDetail = await Detail.destroy({ where: { id } });
    res.json({ status: 'удалено' });
  } catch (error) {
    console.log(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const {
      id, detail, categoryID, price,
    } = req.body;
    const tableDetail = await Detail.findOne({ where: { id } });
    await tableDetail.update({
      detail, categoryID, price,
    });
    res.json({ tableDetail });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
