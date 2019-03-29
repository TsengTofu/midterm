import React from 'react'
// 上面是置入資源

class MoveStep extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let MoveStep;
		// 數值之後抓到		
		return (
            // return必須寫，然後要包父層
          <div><p>Hello 我是用來計算Move的次數{MoveStep}</p></div>
		);
	}
}
export default MoveStep;
