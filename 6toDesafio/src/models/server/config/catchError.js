// const catchError = (err, req, res, next) => {
//   if (err.message) return res.status(400).send({ message: err.message });
//   res.status(500).send({ err });
// };

// module.exports = catchError;

const catchErrors = (app) => {
  app.use((err, req, res, next) => {
    if (err.message) return res.status(400).send({ message: err.message });
    res.status(500).send({ err });
  });
};

module.exports = catchErrors;