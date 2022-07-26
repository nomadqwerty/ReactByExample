import React from 'react'
import ReactDOM from 'react-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))

class App extends React.Component {
    state = {}

    render(){
        return(<div>
            <form>
                <label>Enter a username:</label>
                <input />
            </form>
        </div>)
    }
}

class Time extends React.Component {
    state = {time:new Date().toLocaleTimeString()}

    componentDidMount(){
        setInterval(() => {
            this.setState({time:new Date().toLocaleTimeString()})
        }, 1000)
    }
    
    render() {
        return (
            <div className="time">
                The time is: {this.state.time}
            </div>
        );
    }
}


root.render(<App/>)