import React from "react";
import PropTypes from "prop-types";

const MessengerScript = () => {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.fbAsyncInit = function() {
              FB.init({
                xfbml            : true,
                version          : 'v10.0'
              });
            };
    
            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/fr_FR/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
            `,
        }}
      />
    </>
  );
};

MessengerScript.propTypes = {};

export default MessengerScript;