import React from 'react'

export default function Copyrights() {
  return (
    <div className="copyrights">
    <img src="/vectors/made_in_qc.svg" alt="Lys Flower representing a bond with the Quebec province." height="54px"/>
    <div>
        <span className="made-in-qc">Made in Quebec</span>
        <span>
            &copy;&nbsp;Oreus&nbsp;2021
            {new Date().getFullYear() > 2021 ? (
            <>&nbsp;-&nbsp;{new Date().getFullYear()}</>
            ) : null}
            , All Rights Reserved
        </span>
    </div>
</div>
  )
}
