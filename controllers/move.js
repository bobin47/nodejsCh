const showDataJson = (req, res) => {
  return res.status(200).json({
    message: 'this is route move',
  });
};

module.exports = {
  showDataJson,
};
