import { z } from 'zod';

const userValidationSchema = z.object({
  name: z.string({
    required_error: 'Name is Required',
  }).min(1, 'Name is Required'),

  email: z.string({
    required_error: 'Email is Required',
  }).email('Invalid Email Address'),

  password: z.string({
    required_error: 'Password is Required',
  }).min(6, 'Password Must be at least 6 Characters'),

  role: z.enum(['ADMIN', 'TRAINER', 'TRAINEE'], {
    required_error: 'Role is required and must be ADMIN, TRAINER or TRAINEE',
  }).optional(),
  profilePhoto: z.string().optional(),
  userStatus: z.enum(['active', 'inactive']).optional(),

  createdAt: z.union([z.string(), z.date()]).optional(),
});

export const UserValidation = {
  userValidationSchema,
};