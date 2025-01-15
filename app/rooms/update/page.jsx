'use client';
import { useEffect, useActionState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Heading from '@/components/Heading';
import UpdateRoomForm from '@/components/UpdateRoomForm'; // Import the UpdateRoomForm component

const UpdateRoomPage = ({ room }) => {
    const [state, submitAction] = useActionState(updateRoom, {});
    const router = useRouter();

    useEffect(() => {
        if (state.error) toast.error(state.error);
        if (state.success) {
            toast.success('Room updated successfully!');
            router.push('/rooms/my');
        }
    }, [state]);

    return (
        <>
            <Heading title='Update Room' />
            <div className="bg-white shadow-lg rounded-lg p-6 w-full">
                <UpdateRoomForm room={room} /> {/* Use the UpdateRoomForm component */}
            </div>
        </>
    );
};

export default UpdateRoomPage;
