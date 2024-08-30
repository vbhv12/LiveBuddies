import { useEffect, useState } from 'react'

const useOrigin = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() =>{
    setMounted(true);
  },[])
}

export default useOrigin