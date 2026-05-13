import React from 'react';

const Profile = () => {
    return (
        <div className="bg-white rounded-lg shadow p-6 max-w-md">
            <h2 className="text-2xl font-semibold mb-3">User Profile</h2>
            <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">A</div>
                <div>
                    <div className="font-medium">Demo User</div>
                    <div className="text-sm text-gray-500">demo@example.com</div>
                </div>
            </div>
            <p className="text-gray-700">This is a placeholder profile. You can integrate authentication to show real user data.</p>
        </div>
    );
};

export default Profile;
