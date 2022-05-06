import React, { ReactNode } from 'react'

type CardProps = {
	title?: string
	footer?: ReactNode
	isLoading?: boolean
}

const Card: React.FC<CardProps> = ({ children, title, footer, isLoading }) => {
	return (
		<div
			style={{ display: 'flex' }}
			className="flex-col w-96 max-w-sm items-center rounded-md outline-blue-500 outline"
		>
			<>
				{title ? <CardTitle>{title}</CardTitle> : null}
				{
					<div className="px-2 py-1">
						{isLoading ? (
							<div>
								<i className="fa-solid fa-spinner animate-spin"></i> Loading
							</div>
						) : (
							children
						)}
					</div>
				}
				{footer ? <CardFooter>{footer}</CardFooter> : null}
			</>
		</div>
	)
}

const CardTitle: React.FC = ({ children }) => {
	return <h3 className="font-bold text-lg pt-2">{children}</h3>
}

const CardFooter: React.FC = ({ children }) => {
	return (
		<div className="flex justify-center w-full border-t-2 border-blue-500 mt-4 py-2">
			{children}
		</div>
	)
}

export { Card }
