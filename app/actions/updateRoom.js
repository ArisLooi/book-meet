'use server';

import { createSessionClient } from '@/config/appwrite';
import { cookies } from 'next/headers';

export default async function handler(req, res) {
    if (req.method !== 'PUT') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { id, name, description, sqft, capacity, price_per_hour, address, location, availability, amenities } = req.body;
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('appwrite-session');

    if (!sessionCookie) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const { databases } = await createSessionClient(sessionCookie.value);

        await databases.updateDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS,
            id,
            {
                name,
                description,
                sqft,
                capacity,
                price_per_hour,
                address,
                location,
                availability,
                amenities
            }
        );

        return res.status(200).json({ message: 'Room updated successfully' });
    } catch (error) {
        console.error('Failed to update room:', error);
        return res.status(500).json({ message: 'Failed to update room' });
    }
}
