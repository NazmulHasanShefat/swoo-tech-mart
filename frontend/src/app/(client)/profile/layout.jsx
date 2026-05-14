import React from 'react';
import ProfileMenus from './ProfileMenus';

const ProfileLayout = ({children}) => {
    return (
        <section className="w-full max-w-325 mx-auto px-5 py-5">
      <div className="profileContainer grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="md:col-span-2">
          <ProfileMenus />
        </div>
        <div className="md:col-span-10 shadow-md border-2 border-gray-50 rounded-lg">
         {children}
        </div>
      </div>
    </section>
    );
};

export default ProfileLayout;