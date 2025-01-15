'use client';
import { useEffect, useActionState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Heading from '@/components/Heading';
import UpdateRoomForm from '@/components/UpdateRoomForm';
import updateRoom from '@/app/actions/updateRoom';

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
                <UpdateRoomForm room={room} />
            </div>
        </>
    );
};

export default UpdateRoomPage;
