## React Tour

<p align="center">
  <img alt="Reactour" title="Reactour" src="/logo.svg" width="250">
</p>
<p align="center" style="margin-top: 40px">
  <strong>Tourist Guide</strong> into your React Components
</p>
<p align="center">
  <a href="https://elrumordelaluz.github.io/reactour/">Demo</a>
</p>
<p align="center">
  <a href="https://codesandbox.io/s/6z56m8x18k?module=%2FApp.js">
    <img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="Edit 6z56m8x18k">
  </a>
</p>

### Library

https://github.com/elrumordelaluz/reactour

```zsh
npm i -S reactour
```

```zsh
npm i -S styled-components@^4.0.0
```

### How to use

```tsx
import React, { useState } from 'react'
import Tour from 'reactour'

const steps = [
  {
    selector: '[data-tut="card"]',
    content: `this is Card`,
  },
]

const App = () => {
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
    <>
      <Tour
        accentColor={accentColor}
        steps={steps}
        isOpen={isTourOpen}
        onRequestClose={closeTour}
        rounded={5}
        onAfterOpen={disableBody}
        onBeforeClose={enableBody}
      />

      <div data-tut="card">
        Card
      </div>
    </div>
  )
}
```
