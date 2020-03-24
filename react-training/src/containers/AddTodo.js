import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { DatePicker, Form, Input, Button, Col } from 'antd';
import "antd/dist/antd.css";
import BlockingForm from '../components/BlockingForm'


const AddTodo = () => {
    return (
        <Col lg={{ span: 14 }}>
            <BlockingForm/>
        </Col>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (content, deadline) => dispatch(addTodo(content, deadline))
    }
}

export default connect(null, mapDispatchToProps)(AddTodo)