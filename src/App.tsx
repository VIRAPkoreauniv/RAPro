import useProjectStore, { IProjectState } from "./stores/project"

function App() {
  const projectName = useProjectStore((state: IProjectState)=> state.projectName)
  return (
    <>
      <>Hello</>
      <p>{projectName}</p>
    </>
  )
}

export default App

