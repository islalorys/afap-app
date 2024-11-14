import LoginTecnico from '@/components/login/LoginTecnico';
import UserLogin from '@/hooks/user-login';
import { Button } from '@nextui-org/react';
import React from 'react';

function LoginPage() {
  return (
    <div className='flex items-center justify-center h-full mt-32'>
      {/* <div className='max-w-96 w-full'> */}
        <LoginTecnico/>
      {/* </div> */}
    </div>
  );
}

export default LoginPage;
