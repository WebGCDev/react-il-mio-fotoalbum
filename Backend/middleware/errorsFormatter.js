module.exports = (err, req, res, next) => {
  res.format({
    'application/json': () => {
      res.status(500).json({
        message: 'Ops, something went wrong',
        error: err.message,
      });
    },
    'text/html': () => {
      res.status(500).send('<h1>Ops, something went wrong</h1>');
    },
    default: () => {
      res.status(406).send('Not Acceptable');
    },
  });
};
