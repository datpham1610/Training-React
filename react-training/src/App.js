import React, { Component } from 'react'
import MainTasks from './containers/Main.js'
import {themes} from './components/theme-context'
import ThemeButton from './components/theme-button'
import ErrorBoundary from './components/ErrorBoundary'
import MouseMove from './components/MouseMove'
import CatMove from './components/CatMove'
import Panel from './components/Panel'
import Movie from './components/Movie.js'

const Toolbar = props =>{
  return (
    <ThemeButton onClick={props.changTheme}>
      Change Theme
    </ThemeButton>
  )
}

const ref = React.createRef()

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      theme:themes.light,
    }
  }

  toggleTheme = () =>{
    this.setState(state => ({
      theme:state.theme === themes.dark ? themes.light : themes.dark
    }))
  }

  render() {
    return (
      // <div className='row'>
      //   <div className='col-lg-12'>
      //     <div className='d-md-flex d-flex flex-column justify-content-center custom-bg'>
      //       <div className='row'>
      //         <MainTasks />
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <>
      <ErrorBoundary>
          <div>
            <Panel>
              <Movie><div>Mad Max: Fury Road</div></Movie>
              <Movie><div>Harry Potter & The Goblet Of Fire</div></Movie>
            </Panel>
            <MouseMove render={({ x, y }) => (
              <CatMove mouse={{ x, y }} />
            )}/>
          </div>
      </ErrorBoundary>
      </>
    )
  }
}



export default App
