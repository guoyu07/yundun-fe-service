module.exports = app => {
  const { INTEGER, STRING, BOOLEAN } = app.Sequelize

  const Node = app.model.define('nodes', {
    title: {
      type: STRING(255),
      allowNull: false
    },
    url: {
      type: STRING(255),
      allowNull: false
    },
    env: {
      type: STRING(255),
      defaultValue: 'default'
    },
    show: {
      type: BOOLEAN,
      defaultValue: true
    },
    index: {
      type: INTEGER,
      defaultValue: 0
    }
  })

  return Node
}
