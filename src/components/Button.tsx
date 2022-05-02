import React from 'react'

type ButtonProps = {
	onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
	return (
		<button
			className="rounded-md px-1 outline-orange-300 outline outline-3"
			onClick={() => onClick && onClick()}
		>
			{children}
		</button>
	)
}

export { Button }
