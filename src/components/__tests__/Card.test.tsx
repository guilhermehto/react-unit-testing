import { render, screen } from '@testing-library/react'

import { Card } from '../Card'

describe('Card tests', () => {
	it('displays title when given', () => {
		render(<Card title="title" />)

		expect(screen.getByText('title')).toBeInTheDocument()
	})

	it('displays footer when given', () => {
		render(<Card footer={<button>footer</button>} />)

		expect(screen.getByRole('button')).toBeInTheDocument()
	})

	it('displays card content', () => {
		render(<Card>I am content</Card>)

		expect(screen.getByText('I am content')).toBeInTheDocument()
	})

	it('displays loading state', () => {
		render(<Card isLoading={true}>I am content</Card>)

		expect(screen.queryByText('I am content')).not.toBeInTheDocument()
		expect(screen.queryByText('Loading')).toBeInTheDocument()
	})

	it('displays loading state with footer and title', () => {
		render(
			<Card title="Title" footer="Footer" isLoading={true}>
				I am content
			</Card>
		)

		expect(screen.queryByText('I am content')).not.toBeInTheDocument()
		expect(screen.queryByText('Loading')).toBeInTheDocument()
		expect(screen.queryByText('Title')).toBeInTheDocument()
		expect(screen.queryByText('Footer')).toBeInTheDocument()
	})
})
