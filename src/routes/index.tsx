import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Fallback from '../components/Fallback'
import { ErrorBoundary } from 'react-error-boundary'

const Result = lazy(() => import('../pages/result'))
const Quiz = lazy(() => import('../pages/quiz'))
const Home = lazy(() => import('../pages/home'))
const Layout = lazy(() => import('../components/layout'))

function AllRoutes() {
  return (
    <Suspense fallback={<Fallback />}>
      <BrowserRouter>
        <ErrorBoundary
          fallbackRender={({ error, resetErrorBoundary }) => (
            <div className="h-screen grid place-items-center p-5">
              <h1 className="text-center">
                OOPS , An error occurred: this wasn't supposed to happen
              </h1>
              <a href="/" className="bg-red-500 p-5 rounded-md text-white">
                go back home
              </a>
            </div>
          )}
        >
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />

              <Route path="/quiz" element={<Quiz />} />

              <Route path="/result" element={<Result />} />
            </Route>
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </Suspense>
  )
}

export default AllRoutes
