import { create } from "zustand"
import i18n from "@/lib/i18n"

type Lang = "he" | "en"

interface LangState {
  lang: Lang
  setLang: (lng: Lang) => void
}

export const useLanguage = create<LangState>((set) => ({
  // אתחול – מ-localStorage או ברירת מחדל
  lang: (localStorage.getItem("lang") as Lang) || "en",

  setLang: (lng) => {
    // שמור ב-localStorage
    localStorage.setItem("lang", lng)
    // עדכן dir במסמך
    document.documentElement.dir = lng === "he" ? "rtl" : "ltr"
    // החלף שפה ב-i18next
    i18n.changeLanguage(lng)
    // עדכן state
    set({ lang: lng })
  },
}))
