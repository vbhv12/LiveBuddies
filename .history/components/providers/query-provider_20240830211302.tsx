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

    const [queryClient] = useS 

    return(
       <QueryClientProvider>
        {children}
       </QueryClientProvider> 
    )
}

