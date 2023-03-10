import { AuthRouteObject } from "~/@types";
import PrivateRoute from "~/features/authentication/components/PrivateRoute";
import Login from "~/features/authentication/pages/Login";
import OTP from "~/features/authentication/pages/OTP";
import PasswordRecovery from "~/features/authentication/pages/PasswordRecovery";
import ResetPassword from "~/features/authentication/pages/ResetPassword";
import SignUp from "~/features/authentication/pages/SignUp";
import GuestLayout from "~/features/layout/pages/GuestLayout";

export const guestRoute: AuthRouteObject[] = [
    {
        path: "/home",
        element: <div>landing home</div>,
    },
    {
        path: "/sign-up",
        element: <SignUp />,
        layout: GuestLayout,
    },
    {
        path: "/login",
        element: <Login />,
        layout: GuestLayout,
    },
    {
        path: "/password-recovery",
        element: <PrivateRoute />,
        children: [
            {
                path: "/password-recovery",
                element: <PasswordRecovery />,
                layout: GuestLayout,
            },
            {
                layout: GuestLayout,
                path: "otp",
                element: <OTP />,
            },
            {
                layout: GuestLayout,
                path: "reset",
                element: <ResetPassword />,
            },
        ],
    },
];
