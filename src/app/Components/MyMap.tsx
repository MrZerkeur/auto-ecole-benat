


interface MyMapProps {
    number: number;
  }

const MyMap: React.FC<MyMapProps> = ({ number }) => {
    const src = number === 1 
      ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d176.34716146066762!2d-0.44783775208941035!3d44.99335876868373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5532a975991637%3A0x2de7c88c346a2f48!2sDriving%20School%20Benat!5e0!3m2!1sen!2sma!4v1719142319824!5m2!1sen!2sma" 
      : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d176.08617170601843!2d-0.5012438252006531!3d45.07811220000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48002ecdd5d06b97%3A0xcd1b8c9366575028!2sDriving%20School%20Benat!5e0!3m2!1sen!2sma!4v1719144029930!5m2!1sen!2sma";
  
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <iframe 
          src={src} 
          width="100%" 
          height="100%" 
          style={{ border: "0" }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  }

  export default MyMap;