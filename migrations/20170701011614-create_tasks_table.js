module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable(
        'tasks',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            createdAt: {
                type: Sequelize.DATE
            },
            updatedAt: {
                type: Sequelize.DATE
            },
            title: Sequelize.STRING,
            description: Sequelize.TEXT,
            completed: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false
            },
            //foreign key usage
            user_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'users',
                    key: 'id'
                },
                onUpdate: 'cascade',
                onDelete: 'cascade'
            },
        }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropAllTables()
  }
}