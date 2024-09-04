"use client";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query';

export const QueryProvider = ({
    children
} : {
    children: React.ReactNode
}) => {

    const queryclient = useS 

    return(
       <QueryClientProvider>
        {children}
       </QueryClientProvider> 
    )
}

