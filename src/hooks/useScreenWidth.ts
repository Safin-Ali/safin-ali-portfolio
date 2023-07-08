import { useEffect, useState } from 'react';

export default function useScreenWidth() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(screen.width);
    };

    if(typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      setWidth(screen.width);
      return () => window.removeEventListener('resize', handleResize);;
    }
  }, []);

  return width;
};