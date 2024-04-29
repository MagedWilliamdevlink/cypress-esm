import { Col, Form, Input, Row } from 'antd';
import { useEffect } from 'react';

const RenderFormItems = ({ child }) => {
    console.log(child)
    return (
        <Col className="justify-end">
            <Form.Item name={child.key} label={child.key} >
                <Input />
            </Form.Item>
        </Col >
    )
}

const DynamicForm = (props) => {
    const [form] = Form.useForm();

    useEffect(() => {
        if (props.initialData) {
            form.setFieldsValue(props.initialData);
        }
    }, [])
    return <>
        <Form
            name="another-form"
            form={form}
        >
            {
                props.schamaData(form).map((group, index) => {
                    return (<Row gutter={24} key={index}>
                        {
                            group.children.map((child) => (
                                <RenderFormItems
                                    {...{ child }}
                                    key={child.key}
                                />
                            ))
                        }
                    </Row>)
                })
            }
        </Form >
    </>
}

export default DynamicForm;