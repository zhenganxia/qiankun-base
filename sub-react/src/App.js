import React, { Suspense, useState, useEffect } from 'react'
import { Menu } from 'antd'
import { BrowserRouter as Router, Route, Switch, Link, } from 'react-router-dom'
import Home1 from './Home/index'
import List1 from './List/index'

const menus = [
  {
    key: 'react',
    route: '/',
    title: '主页'
  },
  {
    key: 'react-list',
    route: '/list',
    title: '列表'
  }
]


const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? '/sub-react' : '/'

const App = () => {
  const { pathname } = window.location
  const [refresh, setRefresh] = useState(0)
  const [selectedKeys, setselectkeys] = useState(['react'])

  useEffect(() => {
    const menu = menus.find((item) => `${BASE_NAME}${item.route}` === pathname)
    setselectkeys(() => [menu ? menu.key : 'sub-react'])
  }, [refresh, pathname])

  return (
    <Router basename={BASE_NAME}>
      <section>
        {/* <Menu onClick={() => {
          setRefresh((refresh) => ++refresh)
        }}
          setselectkeys={selectedKeys}
          model="horizontal">
          {
            menus.map((item) => {
              return (
                <Menu.Item key={item.key}>
                  <Link to={item.route}>{item.title}</Link>
                </Menu.Item>
              )
            })
          }
        </Menu> */}

        <Suspense fallback={null}>
          <Switch>
            <Route exact path="/" component={Home1} />
            <Route exact path="/list" component={List1} />
          </Switch>
        </Suspense>
      </section>
    </Router>
  )
}

export default App;
