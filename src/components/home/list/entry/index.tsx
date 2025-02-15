import { memo } from 'react'
import type { FC } from 'react'

import { IconClose } from '@arco-design/web-react/icon'
import { Trigger } from '@arco-design/web-react'
import BaseItem from '../base'
import type { IProps } from '../base'

import styles from './index.module.less'
import { ActionList, Dislike } from './cpns'

const EntryItem: FC<IProps> = memo((props) => {
  return (
    <div className={styles.entry}>
      <BaseItem actionList={<ActionList />} {...props} />

      <div className={styles.close}>
        <Trigger popup={() => <Dislike/> } mouseEnterDelay={400} mouseLeaveDelay={400} position="br">
          <IconClose style={{ color: '#ccc' }} />
        </Trigger>
      </div>
    </div>
  )
})

EntryItem.displayName = 'EntryItem'
export default EntryItem
