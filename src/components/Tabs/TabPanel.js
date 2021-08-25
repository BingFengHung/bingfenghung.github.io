const TabPanel = (props) => {
	return (
		<div className={ `TabPanel ${props.isActive? "is-active": ""}`}>
			{ props.children}
		</div>
	)
}

export default TabPanel