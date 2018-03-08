import React from 'react'

class ThemedDecoration extends React.Component{
	render(){
		const childrenWithExtraProp = React.Children.map(this.props.children, child => {
			return React.cloneElement(child, {
				className: this.props.theme
			})
		})
		return(
			<div>
				{childrenWithExtraProp}
			</div>
		)
	}
}

export default ThemedDecoration
