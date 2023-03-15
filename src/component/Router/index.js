import { Route, } from 'react-router-dom';
import { lazy } from 'react';
import Home from '../Pages/Home';
import NewsContent from '../Pages/Nester/News/NewsContent';
const Nester = lazy(() => import('../Pages/Nester'));   //懶加載 可以不用一進網頁就全部加載
const Message = lazy(() => import('../Pages/Nester/Message'));
const TodoList = lazy(() => import('../Pages/TodoList/index'));
const News = lazy(() => import('../Pages/Nester/News'));
const GithubSearch = lazy(() => import('../Pages/GithubSearch'));
const Count = lazy(() => import('../Pages/Count'));
const Cake = lazy(() => import('../Pages/Cake'));
const Detail = lazy(() => import('../Pages/Nester/Message/Detail'));

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
                children: [
                    {
                        path: '/Nester/Message/Detail/:id/:title',
                        label: 'Detail',
                        component: Detail,
                    }
                ]
            },
            {
                path: '/Nester/News',
                label: 'News',
                component: News,
                children: [
                    {
                        path: '/Nester/News/NewsContent',
                        label: 'NewsContent',
                        component: NewsContent,
                    }
                ]
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