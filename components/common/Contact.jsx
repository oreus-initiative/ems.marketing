import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Label from './Label'
import PillUnderline from './PillUnderline'

export default function Contact({title, address, tel, email}) {
  return (
    <div style={{margin: "32px 0 48px 0"}}>
      <PillUnderline><h3>{title}</h3></PillUnderline>
      <div style={{margin: "12px 0"}}>
          <Label icon={faLocationDot}>
            <a href={address.url} target="_blank" rel="noreferrer">
              {address.streetNumber}&nbsp;{address.street},&nbsp;{address.city}
            </a>
          </Label>
          <Label icon={faPhone}>
          <a href={`tel:${tel.number}`}>{tel.formatted}</a>
          </Label>
          <Label icon={faEnvelope}>
          <a href={`mailto:${email.address}`}>{email.address}</a>
          </Label>
      </div>
  </div>
  )
}
