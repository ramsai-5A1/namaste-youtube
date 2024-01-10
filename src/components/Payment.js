import { Outlet } from "react-router-dom";

const Payment = () => {
    return (
        <div>
            Payment component
            <Outlet/>
        </div>
    )
};

export const Profile = () => {
    return (
        <div>
            Profile component
        </div>
    )
}

export const PreviousPayments = () => {
    console.log("Previous payments component");
    return (
        <div>
            Previous Payments 
        </div>
    )
};

export const DefaultComponent = () => {
    console.log("Default");
    return (
        <div>
            DefaultComponent
        </div>
    )
}

export default Payment;