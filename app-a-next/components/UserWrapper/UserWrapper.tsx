import { useUser } from "@auth0/nextjs-auth0/client"
import React, { ReactNode } from 'react';
import Button from "../ui/Button";

interface UserWrapperProps {
    children: ReactNode
}

function UserWrapper({ children }: UserWrapperProps) {
    const { user, error, isLoading } = useUser();

    if (error) return (
        <h3>error.message</h3>
    )

    if (isLoading) return (
        <Button>Loading...</Button>
    )

    if (!user) {
        return (
            <Button href="/api/auth/login">LogIn</Button>
        )
    }

    return (
        <div className="flex flex-col gap-4 my-2">
            {children}
            <div className="flex justify-start">
                <Button href="/api/auth/logout" secondary>LogOut</Button>
            </div>
        </div>
    );
}

export default UserWrapper;