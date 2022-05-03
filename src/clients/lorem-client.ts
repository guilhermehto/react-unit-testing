import faker from '@faker-js/faker'

const getLorem = async () => {
	await new Promise((r) => setTimeout(r, Math.random() * 2000))
	return faker.lorem.paragraph()
}

export const loremClient = {
	getLorem,
}
