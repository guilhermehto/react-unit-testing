import faker from '@faker-js/faker'

const getLorem = async () => {
	await new Promise((resolve) => setTimeout(resolve, Math.random() * 2))
	return faker.lorem.paragraph()
}

export const loremClient = {
	getLorem,
}
