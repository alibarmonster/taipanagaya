'use client';
import { Card, Input, Checkbox, Button, Typography } from '@/material-ui/index';
import { useCallback, useRef, useState } from 'react';

const Form = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [variant, setVariant] = useState('register');

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => (currentVariant === 'register' ? 'login' : 'register'));
  }, []);

  return (
    <Card
      color='transparent'
      shadow={false}
    >
      <Typography
        variant='h4'
        color='blue-gray'
      >
        {variant === 'register' ? 'Register' : 'Sign in'}
      </Typography>
      <form className='mt-5 mb-2 w-80 max-w-screen-lg sm:w-96'>
        <div className='mb-1 flex flex-col gap-6'>
          <Typography
            variant='h6'
            color='blue-gray'
            className='-mb-3'
          >
            Your Name
          </Typography>
          <Input
            size='lg'
            placeholder='username'
            className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
            labelProps={{
              className: 'before:content-none after:content-none',
            }}
            crossOrigin={undefined}
          />

          {variant === 'register' ? (
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
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                labelProps={{
                  className: 'before:content-none after:content-none',
                }}
                crossOrigin={undefined}
              />
            </div>
          ) : null}

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
            className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
            labelProps={{
              className: 'before:content-none after:content-none',
            }}
            crossOrigin={undefined}
          />
        </div>
        <Button
          className='mt-6'
          fullWidth
        >
          {variant === 'register' ? 'Sign up' : 'Login'}
        </Button>
        <Typography
          color='gray'
          className='mt-4 text-center font-normal'
        >
          {variant === 'register' ? 'Already have an account? ' : 'First Time using TaipaNagaya? '}
          <span
            onClick={toggleVariant}
            className='font-medium text-gray-900 cursor-pointer'
          >
            {variant === 'register' ? 'Login' : 'Create an account'}
          </span>
        </Typography>
      </form>
    </Card>
  );
};

export default Form;
