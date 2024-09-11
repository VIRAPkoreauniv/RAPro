import useComputeC from '../../utils/useComputeC'

export default function Step3Page() {
  const { C_Risk } = useComputeC()
  return (
    <>
      <h1>C Risk : {C_Risk}</h1>
    </>
  )
}
