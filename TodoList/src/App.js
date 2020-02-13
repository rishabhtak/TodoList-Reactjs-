import React from "react";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now(),
        done: false
      };

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      this._inputElement.value = "";
    }

    console.log(this.state.items);

    e.preventDefault();
  }
  onCheck = key => {
    var items = this.state.items;
    for (var i in items) {
      if (items[i].key === key) {
        items[i].done = items[i].done === true ? false : true;
        // console.log(items[i].key);
        break;
      }
    }
    this.setState({ items });
  };

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.addItem}>
            <input
              ref={a => (this._inputElement = a)}
              placeholder="enter task"
            />

            <button type="submit">add</button>
          </form>
        </div>

        <ul>
          {this.state.items.map(item => (
            <li key={item.key}>
              <input type="checkbox" onChange={() => this.onCheck(item.key)} />
              {item.done ? (<strike>{item.text}</strike>):item.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
