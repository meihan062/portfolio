import React, { Component } from 'react';

const valueToText=
    {
    0:'熱飲',
    1:'溫飲',
    2:'常溫',
    3:'去冰',
    4:'微冰',
    5:'少冰',
    6:'正常冰'
}

class RangeInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 6 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  
  render() {
    const { label, min, max, step} = this.props;
    const { value } = this.state;

    return (
      <div className='sugarOut'>
        <label htmlFor="rangeInput">{label}</label>
        <pre><p>    少                多</p></pre>
        <input
          type="range"
          id="rangeInput"
          name="rangeInput"
          min={min}
          max={max}
          value={this.state.value}
          step={step}
          onChange={this.handleChange}
          className="rangColorI"
        />
        <br />
        <span>{valueToText[value] && valueToText[value]}</span>
      </div>
    );
  }
}

export default RangeInput;