class MongoManager {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    try {
      const entities = await this.model.find();
      return entities.map((entity) => entity.toObject());
    } catch (error) {
      throw new Error(`Error: Not data found.`);
    }
  }

  async create(entity) {
    try {
      const newEntity = await this.model.create(entity);
      return newEntity;
    } catch (error) {
      throw new Error(`Error saving data: ${error.message}`);
    }
  }

  async findById(id) {
    try {
      const entity = await this.model.findById(id);
      return entity;
    } catch (error) {
      throw new Error(`Error: Not data found.`);
    }
  }

  async findByIdAndUpdate(id, entity) {
    try{
      const updatedEntity = await this.model.findByIdAndUpdate(id, entity);
      return updatedEntity;
    } catch (error) {
      throw new Error(`Error updating data: ${error.message}`);
    }
  }

  async delete(id) {
    try {
      const deleteProduct = await this.model.findByIdAndDelete(id);
      return deleteProduct;
    } catch (error) {
      throw new Error(`Error: Not data found.`);
    }
  }
}

module.exports = MongoManager;