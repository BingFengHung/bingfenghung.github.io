import { useState } from "react";
import React from "react";
import './Tabs.css';

const Tabs = (props) => { 
	const [selected, setSelected] = useState(0);

	const setSelecteds = (selected) => {
		if (selected !== setSelected) {
			setSelected(selected);
		}
	}

	const handleClick = (tab) => {
		return () => setSelecteds(tab)
	}

	const renderTabList = (child) => {
		let tab = 0

		return React.cloneElement(child, {
			children: React.Children.map(child.props.children, (childTab) => {
				if (childTab.type.name === "Tab") {
					const isActivate = (tab === selected)
					const onClick = handleClick(tab)

					tab++;

					return React.cloneElement(childTab, {isActivate, onClick})
				}
			})
		})
	}

	const renderChildren = (children) => { 
		let panel  = 0; 
		return React.Children.map(children, (child) => { 
			
			if(child.type.name === "TabList") { 
				return renderTabList(child) 
			} 
			
			if (child.type.name === "TabPanel") { 
				const isActive = (panel === selected);
				panel++;

				return React.cloneElement(child, {isActive}) 
			} 

			return child;
		}) 
	}

	return (
		<div className="Tabs">
			{ renderChildren(props.children)}
		</div>
	)
}

export default Tabs;