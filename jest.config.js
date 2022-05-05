module.exports = {
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
