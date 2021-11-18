import { Component } from 'react';

interface ITitleDescriptionProps {
  text: string,
}
class TitleDescription extends Component<ITitleDescriptionProps> {
  render() {
    const { text, children } = this.props;
    return (
      <p style={{ width: '60%'}}>
        <h2>{text}</h2>
        {children}
      </p>
    )
  }
}

export default TitleDescription;