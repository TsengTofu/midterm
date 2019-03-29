import React from 'react'
import CellBox from './cellbox';
// import MoveStep from './move';

class Board extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props)
		console.log(this.props.board)
		console.log(this.props.size)
		console.log(this.props.move)

		this.cellClickHandler = this.cellClickHandler.bind(this)
		this.findClickables = this.findClickables.bind(this)
		this.componentWillMount = this.componentWillMount.bind(this)
		this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
		this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)
		this.getCoordFromIndex = this.getCoordFromIndex.bind(this)
		this.getIndexFromCoord = this.getIndexFromCoord.bind(this)
		
	}

	componentWillMount() {
		this.findClickables(this.props.board, this.props.size);
	  }
	  componentWillReceiveProps(nextProps) {
		this.findClickables(nextProps.board, nextProps.size);
	  }
	  shouldComponentUpdate(nextProps) {
		const curr = this.props.board.join('');
		const next = nextProps.board.join('');
		return curr !== next;
	  }

	  // 找到可以點的
	  findClickables(board, size) {
		const zeroIndex = board.indexOf(0);
		const zeroCoordinate = this.getCoordFromIndex(zeroIndex, size);
		// ------------------------------
		let possibleTopIdx;
		if(zeroCoordinate.row > 0){
			possibleTopIdx = this.getIndexFromCoord(zeroCoordinate.row - 1, zeroCoordinate.column, size)}
			else{
			possibleTopIdx = null;
		}		
		// ------------------------------
		let possiblRightIdx;
		if(zeroCoordinate.column < size){
			possibleTopIdx = this.getIndexFromCoord(zeroCoordinate.row - 1, zeroCoordinate.column, size)
		}else{
			possibleTopIdx = null;
		}
		// ------------------------------
		let possiblBottomIdx;
		if(zeroCoordinate.row < size){
			possiblBottomIdx=this.getIndexFromCoord(zeroCoordinate.row + 1, zeroCoordinate.column, size) 
		}else{
			possiblBottomIdx=null;
		}
		// ------------------------------
		let possibleLeftIdx;
		if(zeroCoordinate.column > 0){
			possibleLeftIdx=this.getIndexFromCoord(zeroCoordinate.row, zeroCoordinate.column - 1, size)
		}else{
			possibleLeftIdx=null;
		}

		this.setState({ 
			zero: zeroIndex, 
			possibleTopIdx: possibleTopIdx, 
			possiblRightIdx: possiblRightIdx,
			possiblBottomIdx: possiblBottomIdx,
			possibleLeftIdx: possibleLeftIdx
		  });

	
		
	  }
	  getCoordFromIndex(idx, size) {
		return {row: Math.floor(idx / size) + 1, column: (idx % size) + 1};
	  }
	  getIndexFromCoord(row, col, size) {
		return (size * (row - 1)) + col - 1; 
	  }
	  cellClickHandler(index) {
		if (index === this.state.possibleTopIdx || index === this.state.possiblRightIdx || 
			index === this.state.possiblBottomIdx || index === this.state.possibleLeftIdx) this.nextBoard(index);
	  }

	  render() {
		{console.log(this.props)}
		const squares = this.props.board.map((val, index) => {
		  if ((index + 1) % this.props.size === 0) {
			// % 取餘數
			return (			  
			  <span key={index}>
				{<CellBox value={val} clickHandler={this.cellClickHandler.bind(this, index)} />}
				<br />
			  </span>
			);
		  }
		  return <span key={index}><CellBox value={val} clickHandler={this.cellClickHandler.bind(this, index)} /></span>;
		});
		return (
		  <div className='board'> 
			{squares}
		  </div>
		);
	  }

}

export default Board;