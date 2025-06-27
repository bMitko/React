import { useState, useEffect } from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div>
      {loading && <div className="loader"></div>}
    </div>
  );
};

export default LoadingSpinner;