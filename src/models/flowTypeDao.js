const { appDataSource } = require('../utils/dataSource');

const getFlowTypes = async () => {
  return await appDataSource.query(
    `
    SELECT id, status as 'option'
    FROM flow_type
    `
  )
}

const getFlowStatusById = async (flowTypeId) => {
  return await appDataSource.query(
    `
    SELECT status 
    FROM flow_type 
    WHERE id = ?
    `,
    [flowTypeId]
  )
}

module.exports = {
  getFlowTypes,
  getFlowStatusById
}

