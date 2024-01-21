'use client';
import { LoginSchema, TLoginSchema } from '@/lib/types';
import { Card, Input, Checkbox, Button, Typography } from '@/material-ui/index';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const FormLogin = () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  axios.defaults.withCredentials = true;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema),
  });

  const submitLogin = async (data: TLoginSchema) => {
    try {
      const response = await axios.post(`${base_url}login`, data);
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
        Sign In
      </Typography>

      <form
        className='mt-5 mb-2 w-80 max-w-screen-lg sm:w-96'
        onSubmit={handleSubmit(submitLogin)}
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
          Login
        </Button>
        <Typography
          color='gray'
          className='mt-4 text-center font-normal'
        >
          First Time using TaipaNagaya?
          <Link
            href='/daftar'
            className='font-medium text-gray-900 cursor-pointer'
          >
            Create an account
          </Link>
        </Typography>
      </form>
    </Card>
  );
};

export default FormLogin;
