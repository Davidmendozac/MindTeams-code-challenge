import React, { CSSProperties, Component } from 'react';

const style = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  borderRadius: '4px',
  marginBottom: '10px',
  padding: '10px 15px',
  width: 'calc(100% - 30px)'
}

const spanStyle = {
  color: '#777',
  fonstSize: '10px',
  fontWeight: 900,
  textTransform: 'uppercase',
} as CSSProperties

interface IProps {
  label: string,
  placeholder?: string,
  input: any,
}

class Input extends Component<IProps> {
  public render() {
    const { input, label } = this.props;
    return (
      <div>
        <span style={spanStyle}>{label}</span>
        <input {...input} {...this.props} style={style} />
      </div>
    )
  }
}

export default Input;