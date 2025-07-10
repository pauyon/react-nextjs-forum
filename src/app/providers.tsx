'use client';

import { NextUIProvider } from "@nextui-org/react";

interface ProvidersProps {
    children: React.ReactNode
}

// handles state across all components in nextui
export default function Providers({ children }: ProvidersProps){
    return <NextUIProvider>{children}</NextUIProvider>
}