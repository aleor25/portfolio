"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'
import en from '../locales/en.json'
import es from '../locales/es.json'

type Translations = typeof en

type I18nContextType = {
  locale: string
  setLocale: (l: string) => void
  t: (key: string, params?: Record<string, string | number>) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

const resources: Record<string, Translations> = { en, es }

function getNested(obj: any, path: string) {
  return path.split('.').reduce((o, p) => (o ? o[p] : undefined), obj)
}

function interpolate(value: string, params?: Record<string, string | number>) {
  if (!params) return value
  return Object.entries(params).reduce((result, [key, val]) => {
    return result.replace(new RegExp(`\\{${key}\\}`, 'g'), String(val))
  }, value)
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<string>('es')

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('locale') : null
    if (saved && resources[saved]) setLocaleState(saved)
  }, [])

  const setLocale = (l: string) => {
    if (!resources[l]) return
    setLocaleState(l)
    if (typeof window !== 'undefined') localStorage.setItem('locale', l)
  }

  const t = (key: string, params?: Record<string, string | number>) => {
    const r = resources[locale] || resources['es']
    const found = getNested(r, key)
    if (typeof found === 'string') return interpolate(found, params)
    return interpolate(key, params)
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>
  )
}

export function useTranslation() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useTranslation must be used within I18nProvider')
  return ctx
}