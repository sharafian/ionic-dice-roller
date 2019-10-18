import {
  IonList
} from '@ionic/react'
import RollerItem from './RollerItem'
import {
  RollersContext,
  Roller
} from '../state/rollers'

import React, { useContext } from 'react'

const RollerList: React.FC = () => {
  const [ { rollers } ] = useContext(RollersContext)

  const items = rollers.map((roller: Roller) => {
    return <RollerItem key={roller.name} roller={roller} />
  })

  return <IonList>
    { items }
  </IonList>
}

export default RollerList
