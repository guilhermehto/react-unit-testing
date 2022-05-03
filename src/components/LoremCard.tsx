import { useEffect, useState } from 'react'

import { loremClient } from '../clients/lorem-client'
import { Button } from './Button'
import { Card } from './Card'

const LoremCard = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [phrase, setPhrase] = useState<string>('')

	useEffect(() => {
		const fetch = async () => {
			await fetchNewPhrase()
		}
		fetch()
	}, [])

	const fetchNewPhrase = async () => {
		setIsLoading(true)
		const newPhrase = await loremClient.getLorem()
		setPhrase(newPhrase)
		setIsLoading(false)
	}

	const handleOnClick = async () => {
		await fetchNewPhrase()
	}

	return (
		<Card
			isLoading={isLoading}
			title="Title"
			footer={<Button onClick={handleOnClick}>New phrase!</Button>}
		>
			<div className="text-justify">{phrase}</div>
		</Card>
	)
}

export { LoremCard }
