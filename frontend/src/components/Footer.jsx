import React from 'react'

function footer() {
  return (
    <>
   
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 border border-t-2 border-red-300 bottom-0">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>

    </>
  )
}

export default footer
