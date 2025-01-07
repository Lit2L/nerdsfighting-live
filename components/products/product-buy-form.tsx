'use client'

import { useActionState } from 'react'

import { checkoutAction } from '@/lib/actions'
import { Button } from '@/components/ui/button'

export function ProductBuyForm({ priceId }: { priceId: string }) {
  const [, formAction, isPending] = useActionState(checkoutAction, null)
  return (
    <form action={formAction}>
      <input type='hidden' name='priceId' value={priceId} />
      <Button type='submit' size='sm' disabled={isPending}>
        {isPending ? 'Please wait' : 'Buy Now'}
      </Button>
    </form>
  )
}
