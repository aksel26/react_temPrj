import React, { Component, useRef } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { useForm } from "react-hook-form"
import $ from "jquery"
import { Container, Button, Form } from "react-bootstrap"

function Regist() {
  // const { register, watch, errors, handleSubmit } = useForm()
  // console.log(watch("email"))
  // //watch는 해당 데이터를 확인한다.
  // const password = useRef()
  // //validate를 위해 지정해준다.
  // password.current = watch("password")
  // const onSubmit = (data) => {
  //   console.log("data", data)
  // }

  // $(function () {
  //   $("#submit").click(function () {
  //     var userid = $(".maininput").val()
  //     $ajax({
  //       type: "POST",
  //       url: "",
  //       dataType: "JSON",
  //       contentType: "application/JSON",
  //       data: JSON.stringify(),
  //       success: successCall,
  //       error: errorCall,
  //     })
  //     function successCall() {
  //       alert("회원가입이 완료되었습니다.")
  //     }
  //     function erorrCall() {
  //       alert("회원가입에 실패하였습니다.")
  //     }
  //   })
  // })

  return (
    <div className="wrapper">
      <div className="regist-title" style={{ display: "inline-block" }}>
        <h1>회원가입</h1>
      </div>
      <div
        className="wrapper-content"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          borderRadius: "7px",
          height: "53em",
          width: "70%",
          margin: "auto",
          marginTop: "80px",
        }}
      >
        <Container>
          <Form
            className="justify-content-md-center mt-5"
            action="/signup"
            method="POST"
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                <h2>E-mail</h2>
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                size="lg"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                <h2>이름</h2>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="이름을 입력하세요"
                size="lg"
                name="name"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                <h2>ID</h2>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="ID를 입력하세요"
                size="lg"
                name="id"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>
                <h2>비밀번호</h2>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="비밀번호를 입력하세요"
                size="lg"
                name="password"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  )
}

export default Regist
