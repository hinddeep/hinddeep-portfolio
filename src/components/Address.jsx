import React from "react";
import { FormattedMessage } from 'react-intl'

const Address = () => {
  return (
    <>
      {/* <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block"><FormattedMessage
          description="homeAddress"
          id="Address.address"
          defaultMessage="Address"
        /></span>404-1160 Rue Saint-Mathieu,
        Montreal, Quebec, Canada - H3H 2P4
      </p> */}
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block"> <FormattedMessage
          description="homeEmail"
          id="Address.email"
          defaultMessage="Email me"
        /></span>{" "}
        <a href="mailto:hinddeepp@appstasy.in">hinddeepp@appstasy.in</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block"> <FormattedMessage
          description="homeCall"
          id="Address.call"
          defaultMessage="Call me"
        /></span>{" "}
        <a href="tel:14387223706">+1 (450) 750-3196</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
