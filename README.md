# Bookit

**Bookit** is a room booking application that allows users to easily book meeting or conference rooms, manage their bookings, and create new room listings. Built with Next.js, Appwrite, and TailwindCSS.

## Features

- User Authentication (Registration & Login)
- Book Meeting or Conference Rooms
- Manage Bookings
- Create New Room Listings
- View Available Rooms
- Responsive Design

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for server-rendered apps.
- [Appwrite](https://appwrite.io/) - Backend server for web and mobile developers.
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework.
- [Luxon](https://moment.github.io/luxon/) - Library for working with dates and times.
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library for React.
- [React Toastify](https://fkhadra.github.io/react-toastify/) - Notification library for React.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ArisLooi/bookit.git
   cd bookit

2. Install dependencies:

    ```bash
    npm install

3. Configure Environment Variables: Create a .env.local file and add your Appwrite credentials:

    ```env
    NEXT_PUBLIC_APPWRITE_ENDPOINT=<Your Appwrite Endpoint>
    NEXT_PUBLIC_APPWRITE_PROJECT=<Your Appwrite Project ID>
    NEXT_PUBLIC_APPWRITE_DATABASE=<Your Appwrite Database ID>
    NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS=<Your Appwrite Bookings Collection ID>
    NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS=<Your Appwrite Rooms Collection ID>
    NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ROOMS=<Your Appwrite Storage Bucket ID>

4. Run the application:

    ```bash
    npm run dev

## Usage
### User Authentication
- Register: New users can register an account.
- Login: Existing users can log in to manage their bookings and rooms.

### Book a Room
- View Available Rooms: Browse the available meeting and conference rooms.
- Book a Room: Fill in the booking form to reserve a room.

### Manage Bookings
- View My Bookings: View and manage your current bookings.
- Cancel Booking: Cancel an existing booking if needed.

### Room Management
- Add Room: Create new room listings with relevant details.
- View My Rooms: View and manage your room listings.
- Delete Room: Delete room listings that you no longer need.
