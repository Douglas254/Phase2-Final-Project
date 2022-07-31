import React from "react";

const Map = () => {
  return (
    <>
      <div className="mt-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.246741438714!2d36.803601546769244!3d-1.287081984041068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11b8c05e8139%3A0x36e1fa2adf93a7f7!2sCalabar%20Cuisine%20KENYA!5e0!3m2!1sen!2ske!4v1659283114995!5m2!1sen!2ske"
          width="100%"
          height="450"
          style={{ border: "0" }}
          title="Cuisine Restaurant Map"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Map;
