import { useEffect } from 'react';

const DisplayAd = ({ className = "" }) => {
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
        data-ad-client="ca-pub-3688316177563716"
        data-ad-slot="9164359670"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default DisplayAd;
