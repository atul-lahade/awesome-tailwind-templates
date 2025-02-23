import { useTranslation } from "react-i18next"

function App() {
  const { t } = useTranslation(['home', 'main']);
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">{t('hello_world')}</h1>
      </div>      
    </>
  )
}

export default App
