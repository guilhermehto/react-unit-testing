import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { LoremCard } from '../LoremCard'

jest.mock('../../clients/lorem-client.ts', () => ({
	loremClient: {
		getLorem: () =>
			new Promise((resolve: any) => setTimeout(() => resolve('my lorem text'), 10)),
	},
}))

describe('Lorem card tests', () => {
	it('starts loading new phrase on mount with title and button', async () => {
		render(<LoremCard />)

		const button = screen.getByRole('button', { name: 'New phrase!' })

		expect(button).toBeInTheDocument()
		expect(screen.getByText('Title')).toBeInTheDocument()
		expect(screen.getByText('Loading')).toBeInTheDocument()
		await waitFor(() => expect(screen.getByText('my lorem text')).toBeInTheDocument())
	})

	it('display loading and phrase when new phrase button clicked', async () => {
		const user = userEvent.setup()
		render(<LoremCard />)

		const button = screen.getByRole('button', { name: 'New phrase!' })

		await user.click(button)

		expect(screen.queryByText('Loading')).toBeInTheDocument()
		await waitFor(() => expect(screen.getByText('my lorem text')).toBeInTheDocument())
	})
})
