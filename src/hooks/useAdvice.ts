import { useCallback, useEffect, useState } from 'react'

interface ISlipAdvice {
    id: number
    advice: string
}

export function useAdvice() {
    const [slip, setSlip] = useState<ISlipAdvice>()

    const refetch = useCallback(async () => {
        const response = await fetch(
            'https://api.adviceslip.com/advice',
            { cache: 'no-cache' }
        )
        const json = (await response.json()) as {
            slip: ISlipAdvice
        }
        setSlip(json.slip)
    }, [])

    useEffect(() => {
        refetch()
    }, [])

    return {
        slip,
        refetch,
    }
}
