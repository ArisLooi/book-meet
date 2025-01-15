'use client';
import { useEffect, useActionState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const UpdateRoomForm = ({ room, onUpdate }) => {
    const [state, submitAction] = useActionState(onUpdate, {});
    const router = useRouter();

    useEffect(() => {
        if (state.error) toast.error(state.error);
        if (state.success) {
            toast.success('Room updated successfully!');
            router.push('/rooms/my');
        }
    }, [state, router]);

    return (
        <form action={submitAction} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    defaultValue={room.name}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                    Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    defaultValue={room.description}
                    className="shadow appearance-none border rounded w-full h-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="sqft" className="block text-gray-700 text-sm font-bold mb-2">
                    Square Feet
                </label>
                <input
                    type="number"
                    id="sqft"
                    name="sqft"
                    defaultValue={room.sqft}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="capacity" className="block text-gray-700 text-sm font-bold mb-2">
                    Capacity
                </label>
                <input
                    type="number"
                    id="capacity"
                    name="capacity"
                    defaultValue={room.capacity}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="price_per_hour" className="block text-gray-700 text-sm font-bold mb-2">
                    Price Per Hour
                </label>
                <input
                    type="number"
                    id="price_per_hour"
                    name="price_per_hour"
                    defaultValue={room.price_per_hour}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
                    Address
                </label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    defaultValue={room.address}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
                    Location
                </label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    defaultValue={room.location}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="availability" className="block text-gray-700 text-sm font-bold mb-2">
                    Availability
                </label>
                <input
                    type="text"
                    id="availability"
                    name="availability"
                    defaultValue={room.availability}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="amenities" className="block text-gray-700 text-sm font-bold mb-2">
                    Amenities
                </label>
                <input
                    type="text"
                    id="amenities"
                    name="amenities"
                    defaultValue={room.amenities}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-8">
                <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
                    Image
                </label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="flex flex-col gap-5">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Save
                </button>
            </div>
        </form>
    );
};

export default UpdateRoomForm;
