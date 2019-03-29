import React from 'react'

class CellBox extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		{console.log(this.props)}
		let cells;
		if(this.props.value === 0){
		  cells='square zero';
		}else{
		  cells='square';
		}	
		return (
			// return必須寫，然後要包父層
			<div className={cells}>
				<span onClick={() => this.props.clickHandler()}>{this.props.value}</span>
			</div>
		);
	}
}
export default CellBox;
