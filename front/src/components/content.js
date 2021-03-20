import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons"
import "../assets/css/App.css"
import { NavLink } from "react-router-dom"
import { useHistory } from "react-router-dom"

function Content(props) {
  console.log("Content render")
  let history = useHistory()
  return (
    <div class="wrapper">
      <div class="main-board">
        <div class="board-title">
          <h1>
            최신글
            <NavLink to="/boardInput" className="addContent">
              <FontAwesomeIcon icon={faPlusSquare} />
            </NavLink>
          </h1>
        </div>
        <div class="board-content">
          {props.data.map(function (a, i) {
            return (
              <div class="content" key={a.id}>
                <div class="subtitle">{a.title}</div>
              </div>
            )
          })}
        </div>
      </div>

      <div class="main-til">
        <div class="til-title">
          <h1>
            최신TIL
            <a href="/" className="addContent">
              <FontAwesomeIcon icon={faPlusSquare} />
            </a>
          </h1>
        </div>
        <div class="til-content">
          {props.data.map(function (a, i) {
            return (
              <div class="content" key={a.id}>
                <div
                  class="subtitle"
                  onClick={() => {
                    history.push("/til/" + props.id)
                  }}
                >
                  {a.title}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div class="main-summary">
        <div class="summary-title">
          <h1>
            Summary
            <a href="/" className="addContent">
              <FontAwesomeIcon icon={faPlusSquare} />
            </a>
          </h1>
        </div>
        <div class="summary-content">
          <div class="content">
            <p class="subtitle">공지사항</p>
          </div>
          <div class="content">
            <p class="subtitle">오늘의 TIL수</p>
          </div>
          <div class="content">
            <p class="subtitle">회원수</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
