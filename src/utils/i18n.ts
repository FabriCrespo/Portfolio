import es from '../locales/es.json'
import en from '../locales/en.json'

type LanguageKey = 'Español' | 'English'

// Tipo flexible: en y es pueden tener pequeñas diferencias (ej. nav.contact)
type Translation = Record<string, unknown>

const translations: Record<LanguageKey, Translation> = {
  'Español': es as Translation,
  'English': en as Translation
}

const isValidLanguage = (s: string | null): s is LanguageKey =>
  s === 'Español' || s === 'English'

export const getCurrentLanguage = (): LanguageKey => {
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem('language')
    return isValidLanguage(stored) ? stored : 'Español'
  }
  return 'Español'
}

export const t = (key: string): string => {
  const language = getCurrentLanguage()
  const translation = translations[language]

  const keys = key.split('.')
  let value: unknown = translation

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k]
    } else {
      return key
    }
  }

  return typeof value === 'string' ? value : key
} 