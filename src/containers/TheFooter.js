import React from 'react'
import { CFooter, CLink } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div className="mfs-auto">
        <span className="mr-1">Powered By</span>
        <CLink
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bintex.id
        </CLink>
      </div>
    </CFooter>
  );
}

export default React.memo(TheFooter)
