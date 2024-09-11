import useComputeC from '../../utils/useComputeC'
import useComputeNC from '../../utils/useComputeNC'

export default function Step3Page() {
  const { C_Risk } = useComputeC()
  const { NC_Risk } = useComputeNC()

  return (
    <>
      <h1>C Risk : {C_Risk}</h1>
      <h1>NC Risk : {NC_Risk}</h1>
    </>
  )
}
