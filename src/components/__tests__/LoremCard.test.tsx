import React from 'react'
import { act } from 'react-dom/test-utils'

import { mount } from 'enzyme'

import { LoremCard } from '../LoremCard'

jest.mock('../../clients/lorem-client', () => ({
	loremClient: {
		getLorem: () => 'lorem phrase',
	},
}))

describe('LoremCard tests', () => {
	it('sets loading when button clicked', () => {
		let wrapper: any

		act(() => {
			wrapper = mount(<LoremCard />)
		})

		const button = wrapper.find('Button')

		act(() => {
			button.simulate('click')
		})

		expect(wrapper.find('Card').prop('isLoading')).toBe(true)
	})

	it('calls fetchPhrase when button clicked', () => {
		let wrapper: any
		const fetchPhraseMock = jest.fn()

		act(() => {
			wrapper = mount(<LoremCard fetchPhrase={fetchPhraseMock} />)
		})

		const button = wrapper.find('Button')

		act(() => {
			button.simulate('click')
		})

		expect(fetchPhraseMock).toHaveBeenCalled()
	})
})
