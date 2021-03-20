import React, { Component, useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons"
import "../assets/css/boardMain.css"
import { NavLink, Route, Link } from "react-router-dom"
import TilDetail from "./tilDetail"
import { useHistory } from "react-router-dom"

function Til(props) {
  let list = []
  let [show, showChange] = useState(true)

  list = [...props.data]

  useEffect(() => {
    return <ListTil />
  }, [show])
  return (
    <div class="board-wrapper">
      <div className="board_box">
        <div className="board_top">
          <div className="board_title">
            <h1>TIL</h1>
          </div>
          <NavLink to="/boardInput" className="board_inputBtn">
            <FontAwesomeIcon icon={faPlusSquare} />
          </NavLink>
        </div>

        <div className="board_content">
          <div className="board_container">
            {show ? (
              list.map(function (a, i) {
                return <ListTil _show={showChange} data={list} i={i}></ListTil>
              })
            ) : (
              <Route path="/til/:id">
                <TilDetail _show={showChange}></TilDetail>
              </Route>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function ListTil(props) {
  return (
    <NavLink to={"/til/" + props.data[props.i].id}>
      <div
        className="board_contents"
        key={props.i}
        onClick={() => props._show(false)}
      >
        <span className="board_num">{props.data[props.i].id}</span>
        <p className="contents_title">{props.data[props.i].title}</p>
      </div>
    </NavLink>
  )
}

export default Til
