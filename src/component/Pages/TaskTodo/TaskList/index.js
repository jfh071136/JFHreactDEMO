import { List, Typography, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteTask } from '../../../../Redux/Action/TaskTodo'; //導入reducer裡面的函數


const TaskList = () => {

    const dispatch = useDispatch(); //dispatch hooks 來傳送值給reducer

    const TaskTodo = useSelector((state) => state.TaskTodo.value);  //從store拿取數據

    const handleDelete = (id) => {

        dispatch(DeleteTask(id))

    };

    return (
        <List
            itemLayout="horizontal"
            dataSource={TaskTodo}
            renderItem={(task) => (
                <List.Item
                    actions={[
                        <Button onClick={() => handleDelete(task.id)} >
                            刪除
                        </Button>,
                    ]}
                >
                    <List.Item.Meta title={task.name} description={task.content} />
                    <div>
                        <Typography.Text strong>{task.points}</Typography.Text> points
                    </div>
                </List.Item>
            )}
        />
    );
};

export default TaskList;
