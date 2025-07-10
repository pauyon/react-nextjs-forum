'use client';

import { useSession } from "next-auth/react";

export default function Profile() {
    const session = useSession(); // client component way

    if (session.data?.user){
        return <div>From client: user is signed in</div>
    }

    return <div>From client: user is NOT signed in</div>
}