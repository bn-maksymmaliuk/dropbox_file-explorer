import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AllFilesPage } from './pages/AllFilesPage'
import { DeletedFiles } from './pages/DeletedFilesPage'
import { NotFoundPage } from './pages/NotFoundPage'
import './styles/normalize.scss'
import './styles/reset.scss'
import style from './App.module.scss'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

export const App = () => {
  return (
    <div className={style.app}>
      <Header />
      
      <div className={style.app__container}>
        <Sidebar />

        <main className={style.app__container_content}>
          <Routes>
            <Route path='/' element={<HomePage />} />

            <Route path='all-files' element={<AllFilesPage />} />

            <Route path='deleted-files' element={<DeletedFiles />} />

            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </div> 
  )
}
