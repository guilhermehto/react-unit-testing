import { useState } from 'react'

import { loremClient } from '../clients/lorem-client'
import { Button } from './Button'
import { Card } from './Card'

const LoremCard = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [phrase, setPhrase] = useState<string>('')

	const handleOnClick = async () => {
		setIsLoading(true)
		const newPhrase = await loremClient.getLorem()
		setPhrase(newPhrase)
		setIsLoading(false)
	}

	return (
		<Card
			isLoading={isLoading}
			title="Title"
			footer={<Button onClick={handleOnClick}>click me</Button>}
		>
			{phrase}
		</Card>
	)
}

export { LoremCard }
