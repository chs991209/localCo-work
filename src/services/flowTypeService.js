const flowTypeDao = require('../models/flowTypeDao');
const error = require('../utils/error');

const getFlowTypes = async () => {
  const flowTypes = await flowTypeDao.getFlowTypes();
  if (flowTypes.length === 0) {
    error.throwErr(404, 'NOT_FOUND_TYPE');
  }
  return flowTypes;
}

const getFlowStatusById = async (flowTypeId) => {
  const result = await flowTypeDao.getFlowStatusById(flowTypeId);
  return result[0].status;
}

module.exports = {
  getFlowTypes,
  getFlowStatusById
}