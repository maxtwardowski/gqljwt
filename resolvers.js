import jsonwebtoken from 'jsonwebtoken'
import usersData from './dummydb'
import { SECRETKEY } from './utils'

const resolvers = {
  Query: {
    async me (_, args, { user }) {
      if (!user) {
        throw new Error('You are not authenticated!')
      }

      return usersData.find(u => {
        if (u.id == user.id)
          return u
      })
    },

    async users (_, args, { user }) {
      if (!user)
        throw new Error('You are not authenticated!')
      return usersData
    },

    async user (_, args, { user }) {
      if (!user)
        throw new Error('You are not authenticated!')
      const { id } = args
      return usersData.find(u => {
        if (id == u.id)
          return u
      })
    }
  },

  Mutation: {
    async login (_, { username, password }) {
      const user = usersData.find(u => {
        if (u.username == username)
          return u
      })

      if (!user) {
        throw new Error('No user with that username')
      }

      //const valid = await bcrypt.compare(password, user.password)
      const valid = password == user.password

      if (!valid) {
        throw new Error('Incorrect password')
      }

      return jsonwebtoken.sign(
        {
          id: user.id, username: user.username
        },
        SECRETKEY,
        {
          expiresIn: '1d'
        }
      )
    }
  }
}

module.exports = resolvers