import { Schema, model } from 'mongoose'
import { IBooking } from './booking.interface'

const bookingSchema = new Schema<IBooking>(
  {
    trainee: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    schedule: {
      type: Schema.Types.ObjectId,
      ref: 'Schedule',
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export const Booking = model<IBooking>('Booking', bookingSchema)