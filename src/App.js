import React, { Component } from 'react';
import './App.css';
import AddWork from './Component/AddWork';
import ListWorkUnfinished from './Component/ListWorkUnfinished';
import ListWorkFinished from './Component/ListWorkFinished';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ListWorkUnfinished: [],
      ListWorkFinished: [],
      setID: 0
    }
  }
  add = (name) => {
    this.setState({
      ListWorkUnfinished: 
            [{ id: "work" + this.state.setID, name: name, checked: false },
            ...this.state.ListWorkUnfinished],
      setID: this.state.setID + 1
    });
  }
  removeWorkUnfinished = (id) => {
    const newArr = this.state.ListWorkUnfinished.filter((item) => { return item.id !== id });
    this.setState({ ListWorkUnfinished: newArr });
  }
  removeWorkFinished = (id) => {
    const newArr = this.state.ListWorkFinished.filter((item) => { return item.id !== id });
    this.setState({ ListWorkFinished: newArr });
  }

  checkWorkUnfinished = (id) => {
    this.state.ListWorkUnfinished.map((item) => {
      if (item.id == id) {
        this.state.ListWorkFinished.unshift(item);
        item.checked = !item.checked;
        this.state.ListWorkUnfinished.splice(this.state.ListWorkUnfinished.indexOf(item), 1);
      }
    });
    this.setState(this.state);
  }
  checkWorkFinished = (id) => {
    this.state.ListWorkFinished.map((item) => {
      if (item.id == id) {
        this.state.ListWorkUnfinished.unshift(item);
        item.checked = !item.checked;
        this.state.ListWorkFinished.splice(this.state.ListWorkFinished.indexOf(item), 1);
      }
    });
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        <div id="todoBox" className="todoBox col-xs-6 col-xs-offset-3">
          <div className="well">
            <h1><b>To-do List</b></h1>
            <AddWork handleAdd={(name) => this.add(name)} />
            <table style={{ width: '100%' }}>
              <tr>
                <td><h3><b>Công việc chưa làm</b></h3></td>
                <td><h3><b>Công việc đã làm</b></h3></td>
              </tr>
              <tr>
                <td className="listWork">
                  <ListWorkUnfinished check={(id) => this.checkWorkUnfinished(id)} 
                                      work={this.state.ListWorkUnfinished}
                                      delW={(id) => this.removeWorkUnfinished(id)} />
                </td>
                <td className="listWork">
                  <ListWorkFinished check={(id) => this.checkWorkFinished(id)} 
                                    work={this.state.ListWorkFinished} 
                                    delW={(id) => this.removeWorkFinished(id)} />
                </td>
              </tr>
            </table>
          </div>
        </div>


        {/* <h1>TO DO LIST</h1>
  <AddWork handleAdd={(name)=> this.add(name)} />
    <h2>Công việc chưa làm</h2>
    <ListWorkUnfinished check={(id)=> this.checkWorkUnfinished(id)} work={this.state.ListWorkUnfinished} delW={(id) =>
      this.removeWorkUnfinished(id)} />
      <h2>Công việc đã làm</h2>
      <ListWorkFinished check={(id)=> this.checkWorkFinished(id)} work={this.state.ListWorkFinished} delW={(id) =>
        this.removeWorkFinished(id)} /> */}

      </div>

    );
  }
}

export default App;