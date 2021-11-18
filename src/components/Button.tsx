import { Component } from 'react';

const style = (block: boolean) => ({
  backgroundColor: '#00D182',
  border: '1px',
  borderRadius: '4px',
  color: '#fff',
  marginBottom: '10px',
  padding: '10px 15px',
  width: block ? '100%' : undefined,
});

interface IProps {
  block?: boolean,
}
class Button extends Component<IProps> {
  public render() {
    const { block } = this.props;
    return (
      <button {...this.props} style={style(!!block)} />
    )
  }
}

export default Button;
