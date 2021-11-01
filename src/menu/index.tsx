import React from 'react';

class Menu extends React.Component<{ appName?: string }, { count: number }> {
  state = { count: 0 };
  render() {
    return (
      <div>
        <div>This is the menu</div>
        <br />
        <div>{this.props.appName}</div>

        <div onClick={() => this.increment(1)}>
          Count: {this.state.count}
      </div>
      </div>
    )
  }
  increment = (amt: number) => {
    // like this
    this.setState((state) => ({
      count: state.count + amt,
    }));
  };
}

export default Menu;