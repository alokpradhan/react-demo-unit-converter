import React, {Component} from 'react'
import InputGroup from './elements/InputGroup'
import Input from './elements/Input'
import Select from './elements/Select'
import Output from './Output'


const options = ['mm', 'cm', 'm', 'km']

class Form extends Component {

  constructor(){
    super()
    this.state = {
      inputValue: '42',
      inputUnits: 'm',
      outputUnits: 'km'
    }
  }

  onChangeInput = (element) => {
    this.setState({
      [element.target.name]: element.target.value
    })
  }

  render(){

    const {
      inputValue, inputUnits, outputUnits, outputAmount
    } = this.state

    return (
      <form>

        <div className="well">
          <h2>Input</h2>
          <InputGroup name="inputValue" labelText="Amount">
            <Input 
              name="inputValue" 
              value={inputValue} 
              onChange={this.onChangeInput}
            />
          </InputGroup>

          <InputGroup name="inputUnits" labelText="Units">
            <Select 
              name="inputUnits"
              options={options}
              value={inputUnits} 
              onChange={this.onChangeInput} 
            />
          </InputGroup>
        </div>

        <Output 
          {...this.state}
          onChangeInput={this.onChangeInput}
        />

      </form>
    )
  }

}

export default Form 