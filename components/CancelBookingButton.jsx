'user client';
import cancelBooking from "@/app/actions/cancelBooking";
import { toast } from 'react-toastify'

const cancelBookingButton = ({ bookingId }) => {
    return (
        <button
            href="#"
            className="bg-red-500 text-white px-4 py-2 rounded w-full sm:w-auto text-center hover:bg-red-700"
        >
            Cancel Booking
        </button>
    );
}
export default cancelBookingButton