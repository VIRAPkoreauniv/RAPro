import useCharacterizationStore, {
  IScenarioData,
} from '../../stores/characterization'
import * as S from './Modal.style'
import CloseIcon from '../../assets/icon/close.svg'
import { useEffect, useState } from 'react'
import SmallButton from '../small-button'
import useProjectStore from '../../stores/project'

const ScenarioModal = () => {
  const {
    numberOfScenario,
    scenarioList,
    setIsModalOn,
    setNumberOfScenario,
    setScenarioList,
  } = useCharacterizationStore((state) => state)
  const [isActive, setIsActive] = useState(false)
  const { setStage } = useProjectStore((state) => state)

  function updateScenarioAtIndex(
    indexToUpdate: number,
    updatedData: Partial<IScenarioData>,
  ) {
    const updatedList = scenarioList?.map((item, index) => {
      if (index === indexToUpdate) {
        return {
          ...item,
          name: updatedData.name || '',
        }
      } else {
        return item
      }
    })

    if (updatedList) {
      setScenarioList(updatedList)
    }
  }

  function handleAddButton() {
    if (numberOfScenario < 5) {
      setNumberOfScenario(numberOfScenario + 1)
      const newScenario = {
        name: '',
        scenario: 0,
        isScenarioKnown: undefined,
        sourceType: undefined,
        pathwayType: undefined,
        receptorType: undefined,
        source: undefined,
        pathway: undefined,
        receptor: undefined,
      }

      setScenarioList([...(scenarioList || []), newScenario])
    }
  }

  function handleRemoveButton(indexToRemove: number) {
    if (scenarioList) {
      const updatedList = scenarioList.filter(
        (_, index) => index !== indexToRemove,
      )
      setScenarioList(updatedList)
      setNumberOfScenario(numberOfScenario - 1)
    }
  }

  useEffect(() => {
    if (!scenarioList) return

    for (let i = 0; i < scenarioList?.length; i++) {
      if (!scenarioList[i].name) {
        setIsActive(false)
        return
      }
    }
    setIsActive(true)
  }, [numberOfScenario, scenarioList])

  return (
    <div>
      <S.ModalWrapper>
        <span className="modal-title">
          Number of risk
          <br /> assessment scenarios
        </span>
        <span className="modal-desc">
          Select the number of scenarios to be assessed (Up to 5)
        </span>
        <S.InputNameWrapper>
          <S.InputWrapper>
            <span>Please input a scenario name</span>
            <input
              type="string"
              value={(scenarioList && scenarioList[0].name) || ''}
              onChange={(e) =>
                updateScenarioAtIndex(0, { name: e.target.value })
              }
            />
          </S.InputWrapper>
        </S.InputNameWrapper>
        {scenarioList &&
          Array(numberOfScenario - 1)
            .fill(0)
            .map((_, idx) => {
              return (
                <S.InputAndButton key={idx}>
                  <S.InputWrapper>
                    <span>Please input a scenario name</span>
                    <input
                      type="string"
                      value={scenarioList[idx + 1].name || ''}
                      onChange={(e) =>
                        updateScenarioAtIndex(idx + 1, {
                          name: e.target.value,
                        })
                      }
                    />
                  </S.InputWrapper>
                  <S.DeleteButton
                    src={CloseIcon}
                    alt="제거"
                    onClick={() => handleRemoveButton(idx + 1)}
                  />
                </S.InputAndButton>
              )
            })}
        {numberOfScenario < 5 && (
          <S.Button onClick={handleAddButton}>+ Scenarios</S.Button>
        )}
      </S.ModalWrapper>
      <S.SmallButtonWrapper>
        <SmallButton
          buttonType="cancel"
          onClick={() => {
            setIsModalOn(false)
            setStage('Preliminary')
          }}
        >
          Cancel
        </SmallButton>
        <SmallButton
          buttonType="next"
          onClick={() => {
            setIsModalOn(false)
          }}
          isActive={isActive}
        >
          Next &nbsp;{'>'}
        </SmallButton>
      </S.SmallButtonWrapper>
    </div>
  )
}

export default ScenarioModal
