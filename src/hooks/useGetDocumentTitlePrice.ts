import { useEffect } from 'react'
import useGetPriceData from './useGetPriceData'

const useGetDocumentTitlePrice = () => {
  const priceData = useGetPriceData()
  const cakePriceUsd = priceData ? parseFloat(priceData.prices.PRISE) : 0

    

  const cakePriceUsdString =
    Number.isNaN(cakePriceUsd) || cakePriceUsd === 0
      ? ''
      : ` - $${cakePriceUsd.toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`

  useEffect(() => {
    document.title = `PolyRise Finance${cakePriceUsdString}`
  }, [cakePriceUsdString])
}
export default useGetDocumentTitlePrice
