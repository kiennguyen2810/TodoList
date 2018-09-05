import React, { Component } from 'react';
import Work from './Work';

class ListWorkFinished extends Component {
    constructor(props) {
        super(props);
    }

    delWork = (id) => {
        this.props.delW(id);
    }

    check = (id) =>{
        this.props.check(id);
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.props.work.map((item, key) => <Work check={(id) => this.check(id)} checkInfo={item.checked}  del={(id)=>{this.delWork(id)}} key={key} id={item.id} name={item.name}/>)}
                </ul>
            </div>
        );
    }
}

export default ListWorkFinished;