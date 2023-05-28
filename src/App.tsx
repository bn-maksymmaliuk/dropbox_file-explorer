import { Routes, Route } from 'react-router-dom'
import { AllFilesPage } from './pages/AllFilesPage'
import { DeletedFilesPage } from './pages/DeletedFilesPage'
import { NotFoundPage } from './pages/NotFoundPage'
import './styles/normalize.scss'
import './styles/reset.scss'
import style from './App.module.scss'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { RecentFilesPage } from './pages/RecentFilesPage'

export const App = () => {
  return (
    <div className={style.app}>
      <Header />
      
      <div className={style.app__container}>
        <Sidebar />

        <main className={style.app__container_content}>
          <Routes>
            <Route path='/' element={<AllFilesPage />} />

            <Route path='all' element={<AllFilesPage />} />

            <Route path='deleted' element={<DeletedFilesPage />} />

            <Route path='recent' element={<RecentFilesPage />} />

            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </div> 
  )
}
