//Como tengas que tocar esto otra vez metelo dentro de el repo de su nombre
//! Sólo si es absolutamente commmun lo usamos.
const findAll = async (Model) => {
  try {
    const response = await Model.find()
    return response
  } catch {
    throw new Error('error finding common models')
  }
}

module.exports = { findAll }
