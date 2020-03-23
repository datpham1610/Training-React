import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Prompt
} from "react-router-dom";
import { DatePicker, Form, Input, Button, Col } from 'antd';


const BlockingForm = (props) => {
    const formRef = React.createRef()
    let [isBlocking, setIsBlocking] = useState(false);
    return (
        <Form className="form-custom"
            onFinish={(values) => {
                props.addTodo(values.content, values.deadline.format("DD/MM/Y"))
                formRef.current.resetFields();
                setIsBlocking(false)
            }}
            ref={formRef}
            name="control-ref"
            layout="inline"
        >
            <Form.Item
                name='content'
                rules={[
                    {
                        required: true,
                        message: 'Please input task!',
                    },
                ]}
            >
                <Prompt when={isBlocking} message = {location => `Are you sure you want go to ${location.pathname.replace('/','')}`} />
                    <Input
                        className=" form-control"
                        placeholder="Enter a task..."
                        type="text"
                        onChange = {e => setIsBlocking(e.target.value.length > 0)}
                    />
            </Form.Item>
            <Form.Item
                name="deadline"
                rules={[
                    {
                        required: true,
                        message: 'Please choose deadline!',
                    },
                ]}
            >
                <DatePicker className="form-control" />
            </Form.Item>
            <Form.Item shouldUpdate={true}>
                <Button htmlType="submit" type="primary" className="form-control btn-add" >Add Tasks</Button>
            </Form.Item>
        </Form>
    )
}

export default BlockingForm