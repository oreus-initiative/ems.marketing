import React from "react";
// import { useTranslation } from "next-i18next";
import PropTypes from "prop-types";
import { Button } from 'react-bootstrap';

/**
 * This component adds a stylised MailChimp input. Emails entered here will
 * be added to the connected MailChimp audience's contacts.
 */
const MailChimp = ({ mailChimpAction, className }) => {
  // const { t } = useTranslation("common");
  return (
    <div id="mc_embed_signup" className={className || ""}>
      <form
        action={mailChimpAction}
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <input
            type="email"
            name="EMAIL"
            className="required email"
            id="mce-EMAIL"
            placeholder="Your Email"
          />
          <div id="mce-responses" className="clear">
            <div
              className="response"
              id="mce-error-response"
              style={{ display: "none" }}
            ></div>
            <div
              className="response"
              id="mce-success-response"
              style={{ display: "none" }}
            ></div>
          </div>
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name={`b_${process.env.MAILCHIMP_USER_ID}_${process.env.MAILCHIMP_AUDIENCE_ID}`}
              tabIndex="-1"
            />
          </div>
          <Button type="submit" id="mc-embedded-subscribe">
            Subscribe to Newsletter
          </Button>
        </div>
      </form>
    </div>
  );
};

MailChimp.propTypes = {
  mailChimpAction: PropTypes.string,
  className: PropTypes.string,
};

export default MailChimp;