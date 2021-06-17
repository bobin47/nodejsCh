const index = (req, res) => {
  return res.status(200).json({
    message: 'this is router user',
  });
};

const chuog = (req, res) => {
  console.log(req);
};

module.exports = {
  index,
  chuog,
};
