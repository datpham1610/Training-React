import React, {lazy, Suspense} from 'react'
import { Row, Col, Spin } from 'antd';
import "antd/dist/antd.css";
import { Switch, Route, useLocation } from 'react-router-dom'



const Home = lazy(() => import('./containers/Home'))
const PrivateRoute = lazy(() => import('./components/AuthButton'))
const Login = lazy(() => import(('./components/ReExport')))
const News = lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 4000));
  return import('./containers/News');
});

const AddTodo = lazy(() => import('./containers/AddTodo'))
const Filter = lazy(()=>import('./containers/Filter'))
const TodoList = lazy(()=>import('./components/TodoList')) 
const DateTime = lazy(()=>import('./components/Date')) 

const NotFound404 = () => {
  const location = useLocation();
  return (
    <p>Not found {location.pathname.split('/')}</p>
  )
}

const App = () => (
  <Suspense fallback={<Spin/>}>
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/login"><Login /></Route>
      <PrivateRoute path="/todos">
        <Row>
          <Col span={24}>
            <div className='d-md-flex d-flex flex-column justify-content-center custom-bg'>
              <Row>

                <Col span={20} offset={2} className='bg-black'>
                  <Row>
                    <Col lg={{ span: 14 }} md={{ span: 12 }}>
                      <div className="heading-left text-md-left text-center">
                        <DateTime />
                      </div>
                    </Col>
                    <Col lg={{ span: 10 }} md={{ span: 12 }}>
                      <Filter />
                    </Col>
                  </Row>
                  <Row className="row">
                    <AddTodo />
                    <Col lg={{ span: 10 }}></Col>
                    <TodoList />
                  </Row>
                </Col>

              </Row>
            </div>
          </Col>
        </Row>
      </PrivateRoute>
      <Route path="/posts">
        <News/>
      </Route>
      <Route path="*"><NotFound404 /></Route>
    </Switch>
  </Suspense>
)

export default App