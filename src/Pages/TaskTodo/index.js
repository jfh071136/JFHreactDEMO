import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'antd';
import TaskFrom from './TaskFrom';

import TaskList from './TaskList';
import { StoreTask } from '../../Redux/Action/TaskTodo'; //導入reducer裡面的函數


const TaskTodo = () => {

    const dispatch = useDispatch(); //dispatch hooks 來傳送值給reducer
    const [Isloading, setIsloading] = useState();

    useEffect(() => {

        const fetchData = async () => {
            try {
                setIsloading(true)
                const response = await axios.get(`http://localhost:3002/TaskData`);
                setIsloading(false)

                return dispatch(StoreTask(response.data))

            } catch (error) {
                console.log(error);
                return null; // 在出現錯誤時返回 null 或其他錯誤值
            }
        }
        fetchData();
    }, [dispatch]);


    //Modal開關
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