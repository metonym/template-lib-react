import * as React from 'react';

class Component extends React.Component<{}, { data: number[] }> {
  public state = {
    data: [0, 1, 2]
  };

  public componentDidMount() {
    this.setState({ data: [] });
  }

  public render() {
    return <React.Fragment>{this.state.data}</React.Fragment>;
  }
}

export default Component;
