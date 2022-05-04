import React from 'react'
import { mount, shallow } from 'enzyme'

import { Card } from '../Card'

describe('Card tests', () => {
	it('should render without props', () => {
		const wrapper = shallow(<Card />)

		expect(wrapper.props().className).toEqual(
			'flex flex-col w-96 max-w-sm items-center rounded-md outline-blue-500 outline'
		)
		expect(Object.keys(wrapper.props())).toHaveLength(2)
	})

	it('should render with props', () => {
		const wrapper = mount(
			<Card footer="footer" title="title">
				card
			</Card>
		)

		expect(wrapper.contains('card')).toEqual(true)
		expect(wrapper.prop('footer')).toEqual('footer')
		expect(wrapper.prop('title')).toEqual('title')
	})

	it('should set isLoading', () => {
		const wrapper = mount(
			<Card isLoading={true} footer="footer" title="title">
				card
			</Card>
		)

		expect(wrapper.contains('card')).toEqual(false)
		expect(wrapper.prop('isLoading')).toBe(true)
		expect(wrapper.prop('footer')).toEqual('footer')
		expect(wrapper.prop('title')).toEqual('title')
	})
})
