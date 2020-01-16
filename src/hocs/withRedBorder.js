import React from 'react'

const withRedBorder = Component => {

  return  props => {
     console.log(props);
    return <Component {...props} style={{ border: "1px solid red", fontWeight: "bold", boxShadow: `0 2px 10px rgba(0,0,0,0.5)` }} />;
  }
}
export default withRedBorder
