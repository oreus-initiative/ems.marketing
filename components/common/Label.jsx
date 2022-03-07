import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Label({icon, children}) {
  return (
    <div className="o_label_container">
      <div className="o_label_icon_container"><FontAwesomeIcon icon={icon} width="16px"/></div>
      {children}
    </div>
  )
}
