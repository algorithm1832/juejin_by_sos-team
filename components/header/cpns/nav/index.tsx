import { memo, useState } from 'react'
import type { FC } from 'react'
import Link from 'next/link'
import { Trigger } from '@arco-design/web-react'
import styles from './index.module.less'

export interface IProps {
  active: number
}

const HeaderNav: FC<IProps> = memo((props) => {
  const active = props.active || 0
  const list = [{ // should be get from backend?
    id: 0,
    name: '首页',
    url: '/',
  }, {
    id: 1,
    name: '沸点',
    url: '/pins',
  }, {
    id: 2,
    name: '课程',
    url: '/course',
  }, {
    id: 3,
    name: '直播',
    url: '/live',
  }, {
    id: 4,
    name: '活动',
    url: '/events/all',
  }, {
    id: 5,
    name: '竞赛',
    url: '/challenge',
  }]
  const [listOpen, setListOpen] = useState(false)
  function NavList() {
    return (
      <ul className={styles.navContainer}>
        {list.map((item) => {
          return (
            <li className={styles.navItem} key={item.id}>
              <Link href={item.url} className={active === item.id ? styles.activeText : styles.navText}>
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }
  return (
    <>
      <div className={styles.listContainer}>
        <NavList />
      </div>
      <Trigger popupVisible={listOpen} trigger='click' popup={() => <NavList />} onClickOutside={() => setListOpen(false)}>
        <div className={styles.navPhone} onClick={() => setListOpen(!listOpen)}>
          <span>{list[active].name}</span>
          <span className={`${styles.navArrow} ${listOpen ? styles.navArrowReversed : ''}`}></span>
        </div>
      </Trigger>
    </>
  )
})

HeaderNav.displayName = 'HeaderNav'
export default HeaderNav
