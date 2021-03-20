import React, { useState, useEffect } from "react"
function TilDetail(props) {
  // let dataId = props.data.find(function (idid) {
  //   return idid.id == id
  // })
  useEffect(() => {
    return () => {
      props._show(true)
    }
  })
  return (
    <div className="boardDetail_wrapper">
      <div className="detail_info">
        <div className="detail_title">
          <h2>제목 :{/* {dataId.title} */}</h2>
        </div>
        <hr />
        <div className="detail_name">
          <h2>작성자 : 작성자</h2>
        </div>
        <div className="detail_desc">
          <h2>내용 :{/* {dataId.desc} */}</h2>
        </div>
      </div>
    </div>
  )
}

export default TilDetail
