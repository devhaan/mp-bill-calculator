import React, { useEffect } from 'react';

const AdComponent = ({ adSlot, style = {}, format = 'auto' }) => {
  useEffect(() => {
    try {
      if (window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      console.error('Adsense error:', e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block', ...style }}
      data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
      data-ad-slot={adSlot}
      data-ad-format={format}
    />
  );
};

export default AdComponent;
