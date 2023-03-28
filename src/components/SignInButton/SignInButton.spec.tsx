import { render, screen } from '@testing-library/react'
import { useSession } from 'next-auth/react'
import { SignInButton } from '.'

jest.mock('next-auth/react')

describe('SignInButton component', () => {
  
  it('renders correctly when user is not authenticated', () => {

   const useSessionMocked = jest.mocked(useSession);

   useSessionMocked.mockReturnValueOnce({ data: null , status: 'unauthenticated' })

    const { debug } = render(
      <SignInButton />
    )

    debug() // o debug serve como uma espécie de console.log... Mostrará todo o html do componente
  
    expect(screen.getByText('Sign in with Github')).toBeInTheDocument()
  })


  it('renders correctly when user is authenticated', () => {

    const useSessionMocked = jest.mocked(useSession);

    useSessionMocked.mockReturnValueOnce()

    render(
      <SignInButton />
    )
  
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })
  
})