import React from 'react'
import ReachDOM from 'react-dom'
import { AppLayout } from '/imports/components/layouts/app_layout'

import './main.html'

Meteor.startup(() =>
  ReachDOM.render(<AppLayout />, document.getElementById("app"))
)