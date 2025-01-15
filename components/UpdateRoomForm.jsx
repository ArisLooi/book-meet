'use client';
import { useEffect } from 'react';
import { useActionState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import updateRoom from '@/app/actions/updateRoom';

const UpdateRoomForm = ({ room }) => {
    const [state, submitAction] = useActionState(updateRoom, {});
    const router = useRouter();

    useEffect(() => {
        if (state.error) toast.error(state.error);
        if (state.success) {
            toast.success('Room has been updated!');
            router.push('/rooms/my');
        }
    }, [state]);

    return (
        <div className="mt-6">
            <h2 className="text-xl font-bold text-gray-800">Update this Room</h2>
            <form action={submitAction} className="mt-4">
                <input type="hidden" name="room_id" value={room.$id} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Room Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full px-3 py-2 border text-gray-700 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            defaultValue={room.name}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            defaultValue={room.description}
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="sqft" className="block text-sm font-medium text-gray-700">
                            Square Feet
                        </label>
                        <input
                            type="number"
                            id="sqft"
                            name="sqft"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            defaultValue={room.sqft}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="capacity" className="block text-sm font-medium text-gray-700">
                            Capacity
                        </label>
                        <input
                            type="number"
                            id="capacity"
                            name="capacity"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            defaultValue={room.capacity}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="price_per_hour" className="block text-sm font-medium text-gray-700">
                            Price Per Hour
                        </label>
                        <input
                            type="number"
                            id="price_per_hour"
                            name="price_per_hour"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            defaultValue={room.price_per_hour}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            defaultValue={room.address}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                            Location
                        </label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            defaultValue={room.location}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="availability" className="block text-sm font-medium text-gray-700">
                            Availability
                        </label>
                        <input
                            type="text"
                            id="availability"
                            name="availability"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            defaultValue={room.availability}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="amenities" className="block text-sm font-medium text-gray-700">
                            Amenities
                        </label>
                        <input
                            type="text"
                            id="amenities"
                            name="amenities"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            defaultValue={room.amenities}
                            required
                        />
                    </div>
                    <div className="mb-8">
                        <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
                            Image
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            className="border rounded w-full py-2 px-3 text-gray-700"
                        />
                    </div>
                </div>
                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                    >
                        Update Room
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateRoomForm;



