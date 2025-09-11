import { useEffect } from 'react';

const MultiplexAd = ({ className = "" }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className={`ad-container ${className}`}>
      <ins 
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-3688316177563716"
        data-ad-slot="9600292182"
      />
    </div>
  );
};

export default MultiplexAd;
