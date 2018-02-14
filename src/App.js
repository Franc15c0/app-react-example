import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: null
        }
    }
    componentDidMount() {
        /**
         * 
         *
        {
          
        },
         * 
         */
        console.log('componentDidMount')
        fetch('https://api.github.com/users', {
                method: 'GET'

            })
            .then(resp => resp.json())
            .then(resp => this.setState({ users: resp }))
            .catch(err => console.log(err))
    }
    render() {
        return ( 
        <section className="App">
            <header className="App-header">
                <h1 className = "App-title" > Github users </h1> 
            </header> 
            <div className = "github-users" > 
            { console.log(this.state) } 
            {this.state.users ? <div>
                    User list 
                    {
                        this.state.users.map(user => (<ul key={user.id}>
                                <li > { user.login } </li> 
                                <li> <img src={user.avatar_url} alt='not found' /></li> 
                            
                            </ul>)

                            )
                        }
                        </div>: <span>Loading...</span >} 
                    </div> 
                </section>
            );
        }
    }

    export default App;