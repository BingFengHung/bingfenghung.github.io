const Tab = (props) => {
	return (
		<li className={`Tab ${props.isActive ? "is-ative": ''}`}
		onClick={props.onClick}>
			{ props.children}
		</li>
	)
}

export default Tab;