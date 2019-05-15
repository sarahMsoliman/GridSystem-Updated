import React, { Component } from 'react'
import '../GridBootstrap/GridSystem.css'

class GridSystem extends Component {

    state = {
        data: [
            { id: 0, src: "http://placehold.it/265x282" },
            { id: 1, src: "http://placehold.it/265x282" },
            { id: 2, src: "http://placehold.it/265x282" },
            { id: 3, src: "http://placehold.it/265x282" },
            { id: 4, src: "http://placehold.it/265x282" },
            { id: 5, src: "http://placehold.it/265x282" },
            { id: 6, src: "http://placehold.it/265x282" },
            { id: 7, src: "http://placehold.it/265x282" },
            { id: 8, src: "http://placehold.it/265x282" },
            { id: 9, src: "http://placehold.it/265x282" }
        ]
    }

    render() {
        return (
            <div className="customContainer">
                <h1>Grid System Based on Bootstrap</h1>
                <div className="customRow">
                    {this.state.data.map(item => (
                        <div key={item.id} className="col-cs-8 col-cm-3 col-clg-2">
                            <img src={item.src} alt="description" className="gridTestImg"/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default GridSystem