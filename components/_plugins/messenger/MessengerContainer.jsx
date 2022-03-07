import React from "react";
import PropTypes from "prop-types";

const MessengerContainer = ({ children, pageId }) => {
  return (
    <>
      <div id="fb-root">{children}</div>
      <div
        className="fb-customerchat"
        attribution="biz_inbox"
        page_id={pageId}
      ></div>
    </>
  );
};

MessengerContainer.propTypes = {
  children: PropTypes.node,
  pageId: PropTypes.string,
};

export default MessengerContainer;