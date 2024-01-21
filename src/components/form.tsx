/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { RegisterSchema, TSignUpSchema } from '@/lib/types';
import { Card, Input, Button, Typography } from '@/material-ui/index';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const Form = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(RegisterSchema),
  });

  const submitRegister = async (data: TSignUpSchema) => {
    try {
      const response = await axios.post(`${base_url}register`, data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card
      color='transparent'
      shadow={false}
    >
      <Typography
        variant='h4'
        color='blue-gray'
        className='text-center'
      >
        Register
      </Typography>

      <form
        className='mt-5 mb-2 w-80 max-w-screen-lg sm:w-96'
        onSubmit={handleSubmit(submitRegister)}
      >
        <div className='mb-1 flex flex-col gap-6'>
          <Typography
            variant='h6'
            color='blue-gray'
            className='-mb-3'
          >
            Your Username
          </Typography>
          <Input
            className={` !border-t-blue-gray-200 focus:!border-t-gray-900 ${
              errors.username && 'border-red-500'
            } rounded appearance-none focus:outline-none focus:shadow-outline`}
            size='lg'
            placeholder='username'
            labelProps={{
              className: 'before:content-none after:content-none',
            }}
            {...register('username')}
            crossOrigin={undefined}
          />
          {errors.username && (
            <p className='text-xs italic text-red-500 mt-2'>{errors.username?.message}</p>
          )}

          <div className='flex flex-col gap-5'>
            <Typography
              variant='h6'
              color='blue-gray'
              className='-mb-3'
            >
              Your Email
            </Typography>
            <Input
              size='lg'
              placeholder='name@mail.com'
              className={` !border-t-blue-gray-200 focus:!border-t-gray-900 ${
                errors.email && 'border-red-500'
              } rounded appearance-none focus:outline-none focus:shadow-outline`}
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              {...register('email')}
              crossOrigin={undefined}
            />
            {errors.email && (
              <p className='text-xs italic text-red-500 mt-2'>{errors.email?.message}</p>
            )}
          </div>
          <Typography
            variant='h6'
            color='blue-gray'
            className='-mb-3'
          >
            Password
          </Typography>
          <Input
            type='password'
            size='lg'
            placeholder='********'
            className={` !border-t-blue-gray-200 focus:!border-t-gray-900 ${
              errors.password && 'border-red-500'
            } rounded appearance-none focus:outline-none focus:shadow-outline`}
            labelProps={{
              className: 'before:content-none after:content-none',
            }}
            {...register('password')}
            crossOrigin={undefined}
          />
          {errors.password && (
            <p className='text-xs italic text-red-500 mt-2'>{errors.password?.message}</p>
          )}
        </div>
        <Button
          className='mt-6'
          fullWidth
          type='submit'
        >
          Sign Up
        </Button>
        <Typography
          color='gray'
          className='mt-4 text-center font-normal'
        >
          Already have an account?
          <Link
            href='/login'
            className='font-medium text-gray-900 cursor-pointer'
          >
            Login
          </Link>
        </Typography>
      </form>
    </Card>
  );
};

export default Form;
