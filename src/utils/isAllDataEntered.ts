import { SCENARIO_PARAMS } from '../data/scenario-params'
import { IPathway, IReceptor, ISource } from '../types/input.type'

interface isAllDataEnteredProps {
  scenario: number
  source: ISource
  pathway: IPathway
  receptor: IReceptor
}

const isAllDataEntered = ({
  scenario,
  source,
  pathway,
  receptor,
}: isAllDataEnteredProps) => {
  const paramsList = SCENARIO_PARAMS[scenario || 0]

  const countSourceInput = Object.values(source).filter((value) =>
    Boolean(value),
  ).length
  const countPathwayInput = Object.values(pathway).filter((value) =>
    Boolean(value),
  ).length
  const countReceptorInput = Object.values(receptor).filter((value) =>
    Boolean(value),
  ).length

  if (
    countSourceInput === paramsList.source.length &&
    countPathwayInput === paramsList.pathway.length &&
    countReceptorInput === paramsList.receptor.length
  ) {
    return true
  }
  return false
}

export default isAllDataEntered
