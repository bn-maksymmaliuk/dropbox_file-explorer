import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AllFilesPage } from './pages/AllFilesPage'
import { DeletedFiles } from './pages/DeletedFilesPage'
import { NotFoundPage } from './pages/NotFoundPage'
import './styles/normalize.scss'
import './styles/reset.scss'

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />

      <Route path='all-files' element={<AllFilesPage />} />

      <Route path='deleted-files' element={<DeletedFiles />} />

      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}
