import React from 'react';
import ButtonPrimary from '../../atoms/buttons/ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../../atoms/buttons/ButtonSecondary/ButtonSecondary';

function UserCard() {
    return (
        <div className="UserCard md:p-16 p-8 bg-gray-200 m-16">
            <div className="Name md:flex md:mb-8">
                <div className="FirstName md:flex-1 md:flex items-center">
                    <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mr-4">
                        First Name:
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        className="mt-1 mr-16 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="First Name"
                    />
                </div>
                <div className="LastName md:flex-1 md:flex items-center">
                    <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mr-8">
                        Last Name:
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Last Name"
                    />
                </div>
            </div>
            <div className="Contact md:flex">
                <div className="Email md:flex-1 md:flex items-center">
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mr-9">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="mt-1 mr-16 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Enter Email"
                    />
                </div>
                <div className="PhoneNumber md:flex-1 md:flex items-center">
                    <label htmlFor="phoneNumber" className="block text-sm font-bold text-gray-700 mr-2">
                        Phone Number:
                    </label>
                    <input
                        type="text"
                        id="phoneNumber"
                        className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Enter Phone Number"
                    />
                </div>
            </div>
            <div className="Actions flex justify-end space-x-2 mt-8">
                <ButtonPrimary buttonText={"Update"}></ButtonPrimary>
                <ButtonSecondary buttonText={"Cancel"}></ButtonSecondary>
            </div>
        </div>
    );
}

export default UserCard;
