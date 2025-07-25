import { model, Schema } from 'mongoose'
import { IUser } from './user.interface'
import bcrypt from 'bcrypt'
import config from '../../config'

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Please Provide Your Name'],
    minlength: 3,
    maxlength: 40,
  },
  email: {
    type: String,
    required: [true, 'Please Provide Your Email'],
    unique: true,
    validate: {
      validator: function (value: string) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)
      },
      message: '{VALUE} is not a Valid Email',
    },
  },
  password: {
    type: String,
    required: [true, 'Please Enter Your Password'],
    select: false,
  },
  role: {
    type: String,
    enum: ['ADMIN', 'TRAINER', 'TRAINEE'],
    default: 'TRAINEE',
  },
  profilePhoto: {
    type: String,
    default: ""
  },
  userStatus: {
    type: String,
    default: 'active',
  },
},
  {
    timestamps: true,
  })


userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this
  // hashing password and save into DB
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  )
  next()
})
// set '' after saving password
userSchema.post('save', function (doc, next) {
  doc.password = ''
  next()
})


const User = model<IUser>('User', userSchema)
export default User