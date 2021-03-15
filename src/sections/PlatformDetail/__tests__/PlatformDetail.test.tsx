import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'

import { ApiCallResult, usePlatform } from '../../../hooks'
import { Platform } from '../../../types'
import { PlatformDetail } from '..'

jest.mock('../../../hooks')

// Tell Typescript that Jest has mocked the usePlatform method in hooks
const mockedUsePlatform = usePlatform as jest.Mock<ApiCallResult<Platform>>

describe('Platform detail', () => {
  let wrapper: RenderResult

  describe('When the platform data is populated', () => {
    beforeEach(() => {
      // Mock the call to usePlatform
      mockedUsePlatform.mockImplementation(() => ({
        data: {
          id: '1234',
          name: 'Big Bertha',
          platformManager: 'Fred Smith',
          representative: 'John Doe',
        },
        loading: false,
      }))

      // Render the component within a fake Router, required so that
      // components can parse parameters or create links
      wrapper = render(
        <MemoryRouter initialEntries={['/platform/1234']}>
          <Route path="/platform/:id">
            <PlatformDetail />
          </Route>
        </MemoryRouter>
      )
    })

    it('should render platform details section', () => {
      expect(wrapper.getByTestId('platform-detail')).toBeInTheDocument()
    })

    it('should not render the error section', () => {
      expect(
        wrapper.queryByTestId('platform-detail-error')
      ).not.toBeInTheDocument()
    })

    it('should not render the loading section', () => {
      expect(
        wrapper.queryByTestId('platform-detail-loading')
      ).not.toBeInTheDocument()
    })

    it('should render platform data section', () => {
      expect(wrapper.getByTestId('platform-detail-data')).toBeInTheDocument()
    })

    it('should render platform name', () => {
      expect(wrapper.getByTestId('platform-detail-name')).toHaveTextContent(
        'Big Bertha'
      )
    })

    it('should render platform manager', () => {
      expect(
        wrapper.getByTestId('platform-detail-platformManager')
      ).toHaveTextContent('Fred Smith')
    })

    it('should render platform representative', () => {
      expect(
        wrapper.getByTestId('platform-detail-representative')
      ).toHaveTextContent('John Doe')
    })
  })

  describe('When loading', () => {
    beforeEach(() => {
      // Mock the call to usePlatform
      mockedUsePlatform.mockImplementation(() => ({
        loading: true,
      }))

      // Render the component within a fake Router, required so that
      // components can parse parameters or create links
      wrapper = render(
        <MemoryRouter initialEntries={['/platform/1234']}>
          <Route path="/platform/:id">
            <PlatformDetail />
          </Route>
        </MemoryRouter>
      )
    })

    it('should render platform details section', () => {
      expect(wrapper.getByTestId('platform-detail')).toBeInTheDocument()
    })

    it('should not render the error section', () => {
      expect(
        wrapper.queryByTestId('platform-detail-error')
      ).not.toBeInTheDocument()
    })

    it('should tell the user the data is loading', () => {
      expect(wrapper.getByTestId('platform-detail-loading')).toBeInTheDocument()
    })

    it('should not render the detail data section', () => {
      expect(
        wrapper.queryByTestId('platform-detail-data')
      ).not.toBeInTheDocument()
    })
  })

  describe('When there is an error', () => {
    beforeEach(() => {
      // Mock the call to usePlatform
      mockedUsePlatform.mockImplementation(() => ({
        error: 'There is an error',
        loading: false,
      }))

      // Render the component within a fake Router, required so that
      // components can parse parameters or create links
      wrapper = render(
        <MemoryRouter initialEntries={['/platform/1234']}>
          <Route path="/platform/:id">
            <PlatformDetail />
          </Route>
        </MemoryRouter>
      )
    })

    it('should render platform details section', () => {
      expect(wrapper.getByTestId('platform-detail')).toBeInTheDocument()
    })

    it('should tell the user there is an error', () => {
      expect(wrapper.getByTestId('platform-detail-error')).toHaveTextContent(
        'There is an error'
      )
    })

    it('should not tell the user the data is loading', () => {
      expect(
        wrapper.queryByTestId('platform-detail-loading')
      ).not.toBeInTheDocument()
    })

    it('should not render the detail data section', () => {
      expect(
        wrapper.queryByTestId('platform-detail-data')
      ).not.toBeInTheDocument()
    })
  })
})
