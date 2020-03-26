import React, { Component } from 'react'
import MainTasks from './containers/Main.js'
import ThemeContext,{themes} from './components/theme-context'
import ThemeButton from './components/theme-button'

const Toolbar = props =>{
  return (
    <ThemeButton onClick={props.changTheme}>
      Change Theme
    </ThemeButton>
  )
}
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      theme:themes.light
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
        <ThemeContext.Provider value={this.state.theme}>
            <Toolbar changTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <div>
          <ThemeButton>w</ThemeButton>
        </div>
      </>
    )
  }
}

export default App
