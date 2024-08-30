import { useEffect, useState } from 'react'

const useOrigin = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() =>{
    setMounted(true);
  },[])

  const origin = typeof window != "undefined"
}

export default useOrigin