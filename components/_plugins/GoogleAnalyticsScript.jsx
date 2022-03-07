import React from "react";
import PropTypes from "prop-types";

const GoogleAnalyticsScript = ({ gaTrackingId }) => {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaTrackingId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};

GoogleAnalyticsScript.propTypes = {
  gaTrackingId: PropTypes.string,
};

export default GoogleAnalyticsScript;