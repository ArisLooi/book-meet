'use client';
import { useState } from 'react';
import { toast } from "react-toastify";
import { FaEdit } from "react-icons/fa";
import UpdateRoomForm from "./UpdateRoomForm";

const UpdateRoomButton = ({ room }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleUpdate = async (updatedRoom) => {
        try {
            const response = await fetch('/api/updateRoom', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedRoom),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success('Room updated successfully!');
                setIsEditing(false);
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.error('Failed to update room:', error);
            toast.error('Failed to update room');
        }
    };

    return (
        <>
            <button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-yellow-500 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-yellow-700"
            >
                <FaEdit className="inline mr-1" /> Edit
            </button>
            {isEditing && <UpdateRoomForm room={room} onUpdate={handleUpdate} />}
        </>
    );
}

export default UpdateRoomButton;
