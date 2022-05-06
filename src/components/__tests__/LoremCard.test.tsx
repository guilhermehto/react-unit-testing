import React from 'react'

import { mount } from 'enzyme'

import { LoremCard } from '../LoremCard'

describe('LoremCard tests', () => {
	it('sets loading when button clicked', () => {
		let wrapper: any

		wrapper = mount(<LoremCard />)

		const button = wrapper.find('Button')

		button.simulate('click')

		expect(wrapper.find('Card').prop('isLoading')).toBe(true)
	})

	it('calls fetchPhrase when button clicked', () => {
		let wrapper: any
		const fetchPhraseMock = jest.fn()

		wrapper = mount(<LoremCard fetchPhrase={fetchPhraseMock} />)

		const button = wrapper.find('Button')

		button.simulate('click')

		expect(fetchPhraseMock).toHaveBeenCalled()
	})
})
