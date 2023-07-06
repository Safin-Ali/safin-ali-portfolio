import { useEffect, useState } from 'react';

export default function useScreenWidth() {
  const [width, setWidth] = useState<number>(screen.width);

  useEffect(() => {
    const handleResize = () => {
      setWidth(screen.width);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
};
