import { nanoid } from '@reduxjs/toolkit';
import { Form, Input, InputNumber, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { AddTask } from '../../../../Redux/Action/TaskTodo'; //導入reducer裡面的函數



const TaskForm = (props) => {

    const dispatch = useDispatch(); //dispatch hooks 來傳送值給reducer

    const [form] = Form.useForm();


    const onFinish = (values) => {
        const id = nanoid()
        dispatch(AddTask({ ...values, id }))
        console.log('Received values of form: ', values);
        props.handleOk()
        console.log(id)
    };

    return (
        <Form form={form} layout="vertical" onFinish={onFinish}>

            <Form.Item label="任務名" name="name" rules={[{ required: true }]}>
                <Input placeholder="輸入name" />
            </Form.Item>

            <Form.Item label="任務內容" name="content" rules={[{ required: true }]}>
                <Input.TextArea placeholder="輸入任務內容" />
            </Form.Item>

            <Form.Item label="任務積分" name="points" rules={[{ required: true }]}>
                <InputNumber min={0} max={1000} placeholder="輸入積分" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" >
                    新增任務
                </Button>
            </Form.Item>
        </Form>
    );
};

export default TaskForm;
