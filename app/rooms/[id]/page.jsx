import Heading from '@/components/Heading';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa';
import rooms from '@/data/rooms.json';

const RoomPage = ({ params }) => { //params from the server side
    const { id } = params; //destructure the id from the params
    const room = rooms.find((room) => room.$id === id); //find the room with matching id from the url

    if (!room) {
        return <Heading title='Room Not Found' />
    }

    return (
        <>
            <Heading title={room.name} />
            <div className="bg-white shadow rounded-lg p-6">
                <a
                    href="/rooms.html"
                    className="flex items-center text-gray-600 hover:text-gray-800 mb-4"
                >
                    <FaChevronLeft className='inline mr-1' />
                    <span className="ml-2">Back to Rooms</span>
                </a>

                <div className="flex flex-col sm:flex-row sm:space-x-6">
                    <Image
                        src={`/images/rooms/${room.image}`}
                        alt={room.name}
                        width={400}
                        height={100}
                        className="w-full sm:w-1/3 h-64 object-cover rounded-lg"
                    />

                    <div className="mt-4 sm:mt-0 sm:flex-1">
                        <p className="text-gray-600 mb-4">
                            Spacious conference hall perfect for large meetings and events.
                            Equipped with modern amenities and comfortable seating.
                        </p>

                        <ul className="space-y-2">
                            <li className="text-gray-800">
                                <span className="font-semibold">Size:</span> 3000 sq
                                ft
                            </li>
                            <li className="text-gray-800">
                                <span className="font-semibold">Availability:</span>
                                9 AM - 5 PM
                            </li>
                            <li className="text-gray-800">
                                <span className="font-semibold">Price:</span>
                                $150/hour
                            </li>
                            <li className="text-gray-800">
                                <span className="font-semibold">Address:</span> 555
                                California St, San Francisco, CA 94104
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-6">
                    <h2 className="text-xl font-bold text-gray-800">Book this Room</h2>
                    <form className="mt-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label
                                    htmlFor="check_in_date"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Check-In Date
                                </label>
                                <input
                                    type="date"
                                    id="check_in_date"
                                    name="check_in_date"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="check_in_time"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Check-In Time
                                </label>
                                <input
                                    type="time"
                                    id="check_in_time"
                                    name="check_in_time"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="check_out_date"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Check-Out Date
                                </label>
                                <input
                                    type="date"
                                    id="check_out_date"
                                    name="check_out_date"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="check_out_time"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Check-Out Time
                                </label>
                                <input
                                    type="time"
                                    id="check_out_time"
                                    name="check_out_time"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                            >
                                Book Room
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default RoomPage;