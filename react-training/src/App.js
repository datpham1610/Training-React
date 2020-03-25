import React from 'react'
import { Row, Col } from 'antd';
import "antd/dist/antd.css";
import { Switch, Route, useLocation } from 'react-router-dom'
import Loadable from 'react-loadable'

const LoadableHome = Loadable({
  loader(){
    return import('./containers/Home')
  },
  loading(){
    return <div>Loading...</div>
  }
})

const LoadableNews = Loadable({
  loader(){
    return import('./containers/News')
  },
  loading(){
    return <div>Loading...</div>
  },
})

const LoadableTodos = Loadable({
  loader(){
    return import('./components/TodoList')
  },
  loading(){
    return <div>Loading...</div>
  }
})

const LoadableAddTodo = Loadable({
  loader(){
    return import('./containers/AddTodo')
  },
  loading(){
    return <div>Loading....</div>
  }
})

const LoadableFilter = Loadable({
  loader(){
    return import('./containers/Filter')
  },
  loading(){
    return <div>Loading....</div>
  }
})

const LoadableRoute = Loadable({
  loader(){
    return import('./components/AuthButton')
  },
  loading(){
    return <div>Loading...</div>
  }
})

const LoadableLogin = Loadable({
  loader(){
    return import('./components/ReExport')
  },
  loading(){
    return <div>Loading...</div>
  }
})

const LoadableDate = Loadable({
  loader(){
    return import('./components/Date')
  },
  loading(){
    return <div>Loading...</div>
  }
}) 

const NotFound404 = () => {
  const location = useLocation();
  return (
    <p>Not found {location.pathname.split('/')}</p>
  )
}

const App = () => (
    <Switch>
      <Route exact path="/"><LoadableHome /></Route>
      <Route path="/login"><LoadableLogin /></Route>
      <LoadableRoute path="/todos">
        <Row>
          <Col span={24}>
            <div className='d-md-flex d-flex flex-column justify-content-center custom-bg'>
              <Row>

                <Col span={20} offset={2} className='bg-black'>
                  <Row>
                    <Col lg={{ span: 14 }} md={{ span: 12 }}>
                      <div className="heading-left text-md-left text-center">
                        <LoadableDate />
                      </div>
                    </Col>
                    <Col lg={{ span: 10 }} md={{ span: 12 }}>
                      <LoadableFilter />
                    </Col>
                  </Row>
                  <Row className="row">
                    <LoadableAddTodo />
                    <Col lg={{ span: 10 }}></Col>
                    <LoadableTodos />
                  </Row>
                </Col>

              </Row>
            </div>
          </Col>
        </Row>
      </LoadableRoute>
      <Route path="/posts">
        <LoadableNews/>
      </Route>
      <Route path="*"><NotFound404 /></Route>
    </Switch>
)

export default App