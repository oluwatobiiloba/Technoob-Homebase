import React from 'react'
import { headerStyle } from '../../style/style'

const FindJob = () => {
  return (
    <div className={`${headerStyle.container}`}>
        <header className={`${headerStyle.parent}`}>
            <span className={`${headerStyle.blueText}`}>FIND </span><span className={`${headerStyle.greenText}`}>JOBS</span>
        </header>
    </div>
  )
}

export default FindJob