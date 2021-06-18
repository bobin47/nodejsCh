const index = (req, res) => {
  return res.status(200).json({
    message: 'this is router user',
  });
};

module.exports = {
  index,
};
