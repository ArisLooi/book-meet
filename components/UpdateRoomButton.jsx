'use client';
import { toast } from 'react-toastify';
import { FaEdit } from 'react-icons/fa';
import updateRoom from '@/app/actions/updateRoom';

const UpdateRoomButton = ({ roomId, roomData }) => {
    const handleUpdate = async () => {
        const confirmed = window.confirm('Are you sure you want to update this room?');
        if (confirmed) {
            try {
                const response = await updateRoom(roomId, roomData);
                if (response.success) {
                    toast.success('Room updated successfully!');
                } else {
                    toast.error(response.error);
                }
            } catch (error) {
                console.log('Failed to update room', error);
                toast.error('Failed to update room');
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
