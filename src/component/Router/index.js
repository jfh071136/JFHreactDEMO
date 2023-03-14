import { Route, } from 'react-router-dom';
import { lazy } from 'react';
import Home from '../Pages/Home';
const Nester = lazy(() => import('../Pages/Nester'));   //懶加載 可以不用一進網頁就全部加載
const Message = lazy(() => import('../Pages/Nester/Message'));
const TodoList = lazy(() => import('../Pages/TodoList/index'));
const News = lazy(() => import('../Pages/Nester/News'));
const GithubSearch = lazy(() => import('../Pages/GithubSearch'));
const Count = lazy(() => import('../Pages/Count'));
const Cake = lazy(() => import('../Pages/Cake'));


export const Routemap = [
    {
        path: '/',
        label: 'Home',
        component: Home,
    },
    {
        path: '/GithubSearch',
        label: 'Github搜索',
        component: GithubSearch,
    },
    {

        path: '/TodoList',
        label: 'TodoList',
        component: TodoList,
    },
    {

        path: '/Nester',
        label: 'Nester',
        component: Nester,
        children: [
            {
                path: '/Nester/Message',
                label: 'Message',
                component: Message,
            },
            {
                path: '/Nester/News',
                label: 'News',
                component: News,
            },
        ],
    },
    {

        path: '/Count',
        label: 'Count',
        component: Count,
    },
    {

        path: '/Cake',
        label: 'Cake',
        component: Cake,
    },


];



export function renderRoutes(routes) {
    return routes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.component />} >
            {route.children && renderRoutes(route.children)}
        </Route>
    ));
}