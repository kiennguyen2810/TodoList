import React, { Component } from 'react';

class Work extends Component {
    constructor(props) {
        super(props);
    }

    del = () => {
        this.props.del(this.props.id);
    }

    check = () => {
        this.props.check(this.props.id);
    }

    checkInfo = () => {
        return false;
    }

    render() {
        return (
            <div>
                <form className="was-validated">
                    <span className="custom-control custom-checkbox mb-3 list-group-item clearfix">
                        <input onChange={this.check.bind(this)} checked={this.props.checkInfo} type="checkbox" className="custom-control-input" id={this.props.id} required />
                        <label className="custom-control-label" htmlFor={this.props.id}>&nbsp;{this.props.name}</label>
                        <button onClick={this.del.bind(this)} type="button" className="btn btn-xs btn-danger pull-right">Xóa</button>
                        <span className="invalid-feedback">Chưa hoàn thành</span>
                        <span className="valid-feedback">Đã hoàn thành</span>
                    </span>
                </form>
            </div>

        );
    }
}

export default Work;