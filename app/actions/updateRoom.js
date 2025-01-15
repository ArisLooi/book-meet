'use server';
import { createSessionClient } from '@/config/appwrite';
import { cookies } from 'next/headers';
import { Query } from 'node-appwrite';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

async function updateRoom(roomId, roomData) {
    const sessionCookie = cookies().get('appwrite-session');
    if (!sessionCookie) {
        redirect('/login');
    }
    try {
        const { account, databases } = await createSessionClient(sessionCookie.value);
        const user = await account.get();
        const userId = user.$id;

        const { documents: rooms } = await databases.listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
            [Query.equal('user_id', userId)]
        );

        const roomToUpdate = rooms.find((room) => room.$id === roomId);

        if (roomToUpdate) {
            await databases.updateDocument(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
                process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
                roomToUpdate.$id,
                roomData
            );

            revalidatePath('/rooms/my', 'layout');
            revalidatePath('/', 'layout');
            return { success: true };
        } else {
            return { error: 'Room not found' };
        }
    } catch (error) {
        console.log('Failed to update room', error);
        return { error: 'Failed to update room' };
    }
}

export default updateRoom;
