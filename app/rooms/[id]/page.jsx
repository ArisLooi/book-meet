import Heading from '@/components/Heading';
import Image from 'next/image';
import Link from 'next/link';
import BookingForm from '@/components/BookingForm';
import { FaChevronLeft } from 'react-icons/fa';
import getSingleRoom from '@/app/actions/getSingleRoom';

const RoomPage = async ({ params }) => { //params from the server side
    const { id } = params; //destructure the id from the params
    const room = await getSingleRoom(id); //find the room with matching id from the url

    if (!room) {
        return <Heading title='Room Not Found' />
    }

    const bucketId = process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ROOMS
    const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT

    const imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${room.image}/view?project=${projectId}`;

    const imageSrc = room.image ? imageUrl : '/images/no-image.jpg';

    return (
        <>
            <Heading title={room.name} />
            <div className="bg-white shadow rounded-lg p-6">
                <Link
                    href="/"
                    className="flex items-center text-gray-600 hover:text-gray-800 mb-4"
                >
                    <FaChevronLeft className='inline mr-1' />
                    <span className="ml-2">Back to Rooms</span>
                </Link>

                <div className="flex flex-col sm:flex-row sm:space-x-6">
                    <Image
                        src={`/images/rooms/${ImageSrc}`}
                        alt={room.name}
                        width={400}
                        height={100}
                        className="w-full sm:w-1/3 h-64 object-cover rounded-lg"
                    />

                    <div className="mt-4 sm:mt-0 sm:flex-1">
                        <p className="text-gray-600 mb-4">
                            {room.description}
                        </p>

                        <ul className="space-y-2">
                            <li className="text-gray-800">
                                <span className="font-semibold">Size:</span> {room.sqft}
                            </li>
                            <li className="text-gray-800">
                                <span className="font-semibold">Availability:</span>
                                {room.availability}
                            </li>
                            <li className="text-gray-800">
                                <span className="font-semibold">Price:</span>
                                ${room.price_per_hour}hour
                            </li>
                            <li className="text-gray-800">
                                <span className="font-semibold">Address:</span> {' '}
                                {room.address}
                            </li>
                        </ul>
                    </div>
                </div>

                <BookingForm />
            </div>
        </>
    );
};

export default RoomPage;