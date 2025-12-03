import React from 'react'

const Account = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          
          <p className="text-sm text-gray-600 mb-8">
            Home / <span className="font-medium">My Account</span>
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            
            
            <div>
              <h2 className="text-xl font-semibold mb-6">Manage My Account</h2>
              <ul className="space-y-4">
                <li><a className="text-red-500 font-medium">My Profile</a></li>
                <li><a className="text-gray-600 hover:text-red-500">Address Book</a></li>
                <li><a className="text-gray-600 hover:text-red-500">My Payment Options</a></li>
              </ul>

              <h2 className="text-xl font-semibold mt-10 mb-6">My Orders</h2>
              <ul className="space-y-4">
                <li><a className="text-gray-600 hover:text-red-500">My Returns</a></li>
                <li><a className="text-gray-600 hover:text-red-500">My Cancellations</a></li>
              </ul>

              <h2 className="text-xl font-semibold mt-10">
                <a className="text-gray-600 hover:text-red-500">My WishList</a>
              </h2>
            </div>

            
            
            <div className="lg:col-span-3 bg-white rounded-lg shadow p-8">
              <h3 className="text-2xl font-semibold text-red-500 mb-8">Profile</h3>

              
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First name</label>
                  <input
                    type="text"
                    defaultValue="Md"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last name</label>
                  <input
                    type="text"
                    defaultValue="Rimel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>

              
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
                  <input
                    type="email"
                    defaultValue="rimel1111@gmail.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label  className="block text-sm font-medium text-gray-700 mb-2">Street address</label>
                  <input
                    type="text"
                    defaultValue="Kingston, 5236, United State"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="space-y-5">
                <h4 className="text-lg font-semibold">Password Changes</h4>

                <input
                  type="password"
                  placeholder="Current password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="password"
                    placeholder="New password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              
              <div className="flex justify-end gap-6 mt-10">
                <button className="text-gray-700 font-medium hover:text-gray-900">
                  Cancel
                </button>
                <button className="px-10 py-3 bg-red-500 text-white font-medium rounded-md hover:bg-red-600">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Account
