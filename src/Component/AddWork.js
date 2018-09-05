import React, { Component } from 'react';

class AddWork extends Component {
    constructor(props) {
        super(props);

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAdd(this.refs.txt.value);
        this.refs.txt.value = "";
    }
    render() {
        return (
            <div>
                <hr />
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <span className="col-md-10"><input 
                    type="text" ref="txt" className="form-control" 
                    placeholder="Nhập công việc" />
                    </span>
                    <div><button onClick={(e) => this.handleSubmit(e)} 
                    type="button" className="btn btn-primary">Thêm</button>
                    </div>
                </form>
                <hr />
            </div>
        );
    }
}

export default AddWork;