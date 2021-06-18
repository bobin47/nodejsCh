const index = (req, res) => {
  return res.status(200).json({
    message: 'this is router user',
  });
};

const anh = () => {
  return 'anh yeu em';
};

module.exports = {
  index,
};
