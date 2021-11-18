import { Component, CSSProperties } from 'react';

const style = (center: boolean): CSSProperties => ({
  alignItems: 'center',
  backgroundColor: '#eee',
  display: 'flex',
  flexDirection: 'column',
  height: 'calc(100vh - 60px)',
  justifyContent: center ? 'center' : undefined,
  padding: '10px 15px',
  width: 'calc(100vw - 30px)',
  textAlign: 'center'
});

interface IContainerProps {
  center?: boolean,
}
class Container extends Component<IContainerProps> {
  public render() {
    const { center, children } = this.props;
    return (
      <div style={style(!!center)}>
        {children}
      </div>
    )
  }
}

export default Container;
