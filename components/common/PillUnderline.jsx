import React from 'react'

/**
 * Adds a pill under the provided content.
 * 
 * @param {Object} Props Props of the component 
 * @returns pill underlined content
 */
export default function PillUnderline({children}) {
  return (
    <div className="o_pill_underlined">
      {children}
      <div className="o_pill_underline"></div>
    </div>
  )
}
