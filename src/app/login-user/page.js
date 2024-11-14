import UserLogin from '@/hooks/user-login';
import React from 'react';

function LoginPage() {
  return (
    <div className='flex items-center justify-center h-full mt-32'>
      <div className='max-w-96 w-full'>
        <UserLogin />
      </div>
    </div>
  );
}

export default LoginPage;
