import React from 'react'
import AddTodo from './containers/AddTodo'
import Filter from './containers/Filter'
import TodoList from './components/TodoList'
import DateTime from './components/Date'
import { Row, Col } from 'antd';
import "antd/dist/antd.css";
import { Switch, Route, useLocation, useHistory } from 'react-router-dom'
import Home from './containers/Home'
import { PrivateRoute, Login } from './components/AuthButton'
import News from './containers/News'



const NotFound404 = () => {
  const location = useLocation();
  return (
    <p>Not found {location.pathname.split('/')}</p>
  )
}

const App = () => {
  let location = useLocation()
  let popup = location.state && location.state.popup
  let history = useHistory()
  const back = () =>{
    history.goBack();
  }
  return(
    <Switch location={popup || location}>
      {popup ? 
        <Route exact path="/">
          <Home />
          <div
            onClick = {back}
            style={{
            position: "absolute",
            background: "#E6E6FA	",
            top: '50%',
            left: "50%",
            padding: 15,
            width:"80vw",
            height:'50vh',
            transform:'translate(-50%,-50%)',
            }}
          >
          </div>
        </Route> 
      :
        <Route exact path="/">
          <Home />
        </Route> 
      }
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
  )
}

export default App