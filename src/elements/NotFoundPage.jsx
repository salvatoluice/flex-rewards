import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-500 to-white">
      <div className="max-w-md p-8 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Oops! Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          It seems like you've wandered off the path. The page you are looking for could not be found.
        </p>
        <p className='mb-6 text-center font-semibold text-[124px] text-primary'>404!</p>
        <p className="text-gray-600 mb-4">
          Don't worry, let's get you back on track! You can go back to the
          <a href="/" className="text-primary hover:underline"> homepage</a>
          {' '}or try using the navigation menu.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;