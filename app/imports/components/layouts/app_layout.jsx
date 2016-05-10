import React from 'react'

import { AppHeaderLayout } from './app_header_layout'

export const AppLayout = () =>
  <div id="app-container">
    <AppHeaderLayout pageTitle="My Custom Title"/>
    <div id="main-content" className="container">
      React placeholder
    </div>
  </div>
