import { Button, Modal } from 'antd';
import { useState } from 'react';
import TaskList from './TaskList';
import TaskFrom from './TaskFrom';

const TaskTodo = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };


    return (
        <>
            <Button type="primary" onClick={showModal}>
                任務新增
            </Button>

            <Modal title="任務新增欄" open={isModalOpen} footer={[

            ]} onCancel={handleOk}>

                <TaskFrom handleOk={handleOk} />
            </Modal>
            <TaskList />
        </>
    );
};
export default TaskTodo;