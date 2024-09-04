"use client";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query';
import { useState } from 'react';

export const QueryProvider = ({
    children
} : {
    children: React.ReactNode
}) => {

    const [queryClient] = useState

    return(
       <QueryClientProvider>
        {children}
       </QueryClientProvider> 
    )
}

