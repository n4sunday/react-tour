import React, { useState } from 'react'
import './App.css'
import Tour from 'reactour'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { Card, Button, Rate, Empty, Result } from 'antd'
import styled from 'styled-components'

const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;

  .box-content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 350px;
  }

  .btn {
    padding: 20px;
  }
`

const steps = [
  {
    selector: '[data-tut="card"]',
    content: `this is header`,
  },
  {
    selector: '[data-tut="rate"]',
    content: `this is Rate`,
  },
  {
    selector: '[data-tut="empty"]',
    content: `this is Empty`,
  },
  {
    selector: '[data-tut="result"]',
    content: `this is Result`,
  },
  {
    selector: '[data-tut="404"]',
    content: `this is Result 404`,
  },
]

function App() {
  const [isTourOpen, setIsTourOpen] = useState(false)

  const disableBody = (target: any) => {
    disableBodyScroll(target)
  }
  const enableBody = (target: any) => {
    enableBodyScroll(target)
  }

  const openTour = () => {
    setIsTourOpen(true)
  }
  const closeTour = () => {
    setIsTourOpen(false)
  }

  const accentColor = '#5cb7b7'

  return (
    <div className="App">
      <Tour
        accentColor={accentColor}
        steps={steps}
        isOpen={isTourOpen}
        onRequestClose={closeTour}
        rounded={5}
        onAfterOpen={disableBody}
        onBeforeClose={enableBody}
      />
      <WrapperStyled>
        <div className="btn">
          <Button type="primary" onClick={openTour}>
            Tour
          </Button>
        </div>

        <div data-tut="rate" className="box-content">
          <Rate />
        </div>
        <div className="box-content">
          <Card data-tut="card" title="Header" extra={<a href="#">More</a>} style={{ width: 350 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
        <div className="box-content">
          <Empty data-tut="empty" image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </div>
        <div data-tut="result">
          <Result
            status="success"
            title="Successfully Purchased Cloud Server ECS!"
            subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
          />
        </div>
        <div data-tut="404">
          <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary">Back Home</Button>}
          />
        </div>
      </WrapperStyled>
    </div>
  )
}

export default App
