import React from 'react'
import Alert from './elements/Alert'
import {convertedValue} from '../helpers/conversion'

const ConversionResult = ({inputValue, inputUnits, outputUnits}) => {

  if(!inputValue || !inputUnits || !outputUnits){
    return null
  }

  return (
    <div>
      <label>New Quantity</label>
      <Alert>
        {convertedValue(inputValue, inputUnits, outputUnits)}
      </Alert>
    </div>
  )

}

export default ConversionResult