const express = require('express');
const models = require('./models'); 
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173' 
  }));
app.post('/api/users', async (req, res) => {
  try {
    const user = await models.User.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/api/promotions', async (req, res) => {
  try {
    const promotion = await models.Promotion.create(req.body);
    res.json(promotion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
models.sequelize.sync({ force: true }).then(() => {
    console.log("Tables have been created");
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  models.sequelize.authenticate().then(() => {
    console.log('Database connected!');
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  });
})});
