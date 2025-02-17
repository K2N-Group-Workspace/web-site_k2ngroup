import { useEffect } from "react";

export default function useAutoTranslate(targetLang: string) {
  useEffect(() => {
    const translateText = async (text: string, targetLang: string) => {
      if (targetLang === "fr") return text; // Pas de traduction si déjà en français

      try {
        const response = await fetch("http://localhost:5000/translate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            q: text,
            source: "fr",
            target: targetLang,
            format: "text",
          }),
        });

        const data = await response.json();
        return data.translatedText || text; // Retourne la traduction ou le texte original en cas d'erreur
      } catch (error) {
        console.error("Erreur de traduction :", error);
        return text;
      }
    };

    const elements = document.querySelectorAll("[data-auto-translate]");

    elements.forEach(async (el) => {
      if (el.textContent) {
        const translatedText = await translateText(el.textContent, targetLang);
        el.textContent = translatedText;
      }
    });
  }, [targetLang]);
}