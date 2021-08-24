import styled from './Loading.module.css'

function Loading() {
	return (
	<div className={styled['cssload-tetrominos']}> 
		<div className={`${styled['cssload-tetromino']} ${styled['cssload-box1']}`}></div> 
		<div className={`${styled['cssload-tetromino']} ${styled['cssload-box2']}`}></div> 
		<div className={`${styled['cssload-tetromino']} ${styled['cssload-box3']}`}></div> 
		<div className={`${styled['cssload-tetromino']} ${styled['cssload-box4']}`}></div> 
</div>
	)
}
export default Loading;