import React from 'react'

export default function Pagination(props) {
   const { gotoPrevPage, gotoNextPage } = props
   return (
      <div id="pagi">
         {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
         {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
      </div>
   )
}
