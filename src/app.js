import React from 'react'
// 玩家名字+開始按鈕
import Board from './board';
// 整個拼圖版+移動幾步


// 主要的App最外層
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			board: [0,1,2,3,4,5,6,7,8],
			// 陣列
			move:[],
			size:3
		};
		this.newGame = this.newGame.bind(this);
		this.shuffleNum = this.shuffleNum.bind(this)
	}
	
	newGame(){
		let board = new Array();
		for(let i = 0; i < 9; i++){board[i]=i;}	
		// console.log(board);
		// 洗牌
		board = this.shuffleNum(board);
		console.log(board);
		this.setState((prevState, props) => ({
			board:board
		}));
		console.log(this.state.board);
	}

	// 洗牌 重新開始一局的時候 產生亂數
	shuffleNum(o) {
		const temp = o.slice();
		for(var j, x, i = temp.length; i; j = Math.floor(Math.random() * i), x = temp[--i], temp[i] = temp[j], temp[j] = x);
		return temp;
	}


	
	render() {		
		return (
            // return必須寫，然後要包父層
            <div>
                <h1>Puzzle Game Midterm Test</h1>
				<form>
					<div>
						<input type="text" />
					</div>
					<div>
						<div onClick={this.newGame} className="start">Start</div>
					</div>
				</form>
                <Board board={this.state.board} move={this.state.move} size={this.state.size} />
            </div>			
		);
	}
}

export default App;