import React from 'react'

const FancyBtn = React.forwardRef((props,ref) => (
    <button ref={ref} className="FancyButton">
        {props.children}
    </button>
))

export default FancyBtn