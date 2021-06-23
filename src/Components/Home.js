import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div className="home__main">
                <div>
                    <Link className="home__main_link" to="/page1">Page 1</Link>
                </div>
                <div>
                    <Link className="home__main_link" to="/page2">Page 2</Link>
                </div>
            </div>
        )
    }
}

export default Home