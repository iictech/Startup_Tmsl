import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Blog from './Pages/Blog/Blog'
import Account from './Pages/Account/Account'
import EditAccount from './Pages/Account/EditAccount/EditAccount'
import BlogPage from './Pages/Blog/BlogPage/BlogPage'
import Discussion from './Pages/Discussion/Discussion'
import DiscussionPage from './Pages/Discussion/DiscussionPage/DiscussionPage'
import Featured from './Pages/Featured/Featured'
import Feedback from './Pages/Feedback/Feedback'
import ThankYou from './Pages/Feedback/ThankYou/ThankYou'
import EventsCalender from './Pages/EventsCalender/EventsCalender'
import Home from './Pages/Home/Home'


const App = () => {
  const routes = [
    { path: '/', component: Home},
    { path: '/blog', component: Blog },
    { path: '/account', component: Account },
    { path: '/edit-account', component: EditAccount },
    { path: '/blog-page', component: BlogPage },
    { path: '/discussion', component: Discussion },
    { path: '/discussion-page', component: DiscussionPage },
    { path: '/featured', component: Featured },
    { path: '/feedback', component: Feedback },
    { path: '/thank-you', component: ThankYou },
    { path: '/events-calender', component: EventsCalender },
  ];

  return (
    <> 
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </>
  )
}

export default App