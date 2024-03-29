import {IUser, IDataTypes} from 'types'

export default (sequelize: any, DataTypes: IDataTypes): IUser => {
   return sequelize.define('User', {
      id: {
         primaryKey: true,
         allowNull: false,
         type: DataTypes.STRING,
      },
      username: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
         validate: {
            isAlphanumeric: {
               args: true,
               msg: 'The user just accepts alphanumeric characters',
            },
            len: {
               args: [4, 20],
               msg: 'The username must be from 4 to 20 characters',
            },
         },
      },
      hash: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      salt: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
         validate: {
            isEmail: {
               args: true,
               msg: 'Invalid email',
            },
         },
      },
      active: {
         type: DataTypes.BOOLEAN,
         allowNull: false,
         defaultValue: false,
      },
      admin: {
         type: DataTypes.BOOLEAN,
         allowNull: false,
         defaultValue: false,
      },
   })
}
