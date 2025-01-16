'use client';
import { toast } from 'react-toastify';
import { FaEdit } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; // Import useRouter

const UpdateRoomButton = ({ roomId }) => {
    const router = useRouter(); // Initialize the router

    const handleUpdate = async () => {
        const confirmed = window.confirm('Are you sure you want to update this room?');
        if (confirmed) {
            try {
                // Navigate to the update room page
                if (roomId) {
                    router.push(`/rooms/update/${roomId}`);
                } else {
                    throw new Error('Room ID is undefined');
                }
            } catch (error) {
                console.log('Failed to navigate to update room page', error);
                toast.error('Failed to navigate to update room page');
            }
        }
    };

    return (
        <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-blue-700"
        >
            <FaEdit className="inline mr-1" /> Update
        </button>
    );
};

export default UpdateRoomButton;

