import { Dispatch, SetStateAction, useCallback, useMemo, useState } from 'react'
import { signIn } from 'next-auth/react'

import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { Icons } from '@/components/shared/icons'

import Logo from '../Logo'

function SignInModal({
  showSignInModal,
  setShowSignInModal
}: {
  showSignInModal: boolean
  setShowSignInModal: Dispatch<SetStateAction<boolean>>
}) {
  const [signInClicked, setSignInClicked] = useState(false)

  return (
    <Modal showModal={showSignInModal} setShowModal={setShowSignInModal}>
      <div className='relative -z-10 w-full bg-transparent'>
        <div className='flex flex-col items-center justify-center space-y-3 border-b bg-background px-4 py-6 pt-8 text-center md:px-16'>
          <h3 className='text-gradient_greens font-urban text-2xl font-bold'>Welcome Back!</h3>
          <Logo />
          <p className='text-gradient_greens text-sm'>Login to your {siteConfig.name} Account!</p>

          <p className='text-sm text-white/90'>
            Get Updates, Blog Articles, Progress Tracker, News, and Special Offers
          </p>
        </div>

        <div className='z-20 flex flex-col space-y-4 bg-secondary/50 px-4 py-8 md:px-16'>
          <Button
            variant='default'
            disabled={signInClicked}
            onClick={() => {
              setSignInClicked(true)
              signIn('google', { redirect: false }).then(() =>
                setTimeout(() => {
                  setShowSignInModal(false)
                }, 400)
              )
            }}
          >
            {signInClicked ? (
              <Icons.spinner className='mr-2 size-4 animate-spin' />
            ) : (
              <Icons.google className='mr-2 size-4' />
            )}{' '}
            Sign In with Google
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export function useSignInModal() {
  const [showSignInModal, setShowSignInModal] = useState(false)

  const SignInModalCallback = useCallback(() => {
    return <SignInModal showSignInModal={showSignInModal} setShowSignInModal={setShowSignInModal} />
  }, [showSignInModal, setShowSignInModal])

  return useMemo(
    () => ({
      setShowSignInModal,
      SignInModal: SignInModalCallback
    }),
    [setShowSignInModal, SignInModalCallback]
  )
}
