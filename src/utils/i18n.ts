import es from '../locales/es.json'
import en from '../locales/en.json'

const translations = {
  'Español': es,
  'English': en
}

export const getCurrentLanguage = () => {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem('language') ?? 'Español'
  }
  return 'Español'
}

export const t = (key: string) => {
  const language = getCurrentLanguage()
  const translation = translations[language]
  
  const keys = key.split('.')
  let value = translation
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      return key
    }
  }
  
  return value
} 