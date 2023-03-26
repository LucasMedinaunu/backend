const reusableSchemaMethods = (schema) => {
  schema.method("toJSON", function () {
    const { __v, ...object } = this.toObject();
    return object;
  });
};

module.exports = reusableSchemaMethods;