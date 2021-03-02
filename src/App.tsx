import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { HomePage, PlatformDetailPage } from './pages'

export const App: React.FC = () => (
  <Router>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/platform/:id" component={PlatformDetailPage} />
  </Router>
)
