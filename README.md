# Ukázková osobní stránka

Jednoduchý statický web (HTML + CSS + JavaScript, bez build nástrojů) připravený k nasazení na GitHub Pages.

## Struktura

```
muj-web/
├── index.html      # celá stránka (jedna stránka, kotvy na sekce)
├── css/style.css   # design tokeny, base styly, komponenty
├── js/main.js      # přepínač motivu, rok v patičce, validace formuláře
├── .nojekyll       # vypne zpracování Jekyllem na GitHub Pages
└── README.md
```

## Co stránka umí

- Responzivní rozvržení (desktop i mobil)
- Světlý a tmavý režim (respektuje nastavení systému + ruční přepínač)
- Vlastní SVG logo a favicon
- Ukázkový kontaktní formulář s klientskou validací
- Přístupnost: skip link, `aria-label`, viditelný focus, kontrast WCAG AA

## Lokální spuštění

Stačí otevřít `index.html` v prohlížeči. Pohodlnější je lokální server:

```bash
# Python
python3 -m http.server 8000

# nebo VS Code rozšíření "Live Server" → pravý klik na index.html → Open with Live Server
```

## Nasazení na GitHub Pages

### 1. Vytvořte repozitář

Na GitHubu vytvořte nový veřejný repozitář, například `muj-web`.

> Tip: pokud repozitář pojmenujete `vase-uzivatelske-jmeno.github.io`, web poběží přímo na
> `https://vase-uzivatelske-jmeno.github.io/` bez podadresáře.

### 2. Nahrajte soubory

```bash
cd muj-web
git init
git add .
git commit -m "Prvni verze webu"
git branch -M main
git remote add origin https://github.com/VASE-JMENO/muj-web.git
git push -u origin main
```

### 3. Zapněte GitHub Pages

V repozitáři: **Settings → Pages**

- **Source**: `Deploy from a branch`
- **Branch**: `main`, složka `/ (root)`
- **Save**

Za 1–2 minuty poběží web na:
`https://VASE-JMENO.github.io/muj-web/`

### 4. Další změny

```bash
git add .
git commit -m "Popis zmeny"
git push
```

Každý `push` do větve `main` web automaticky aktualizuje.

## Vlastní doména (volitelné)

1. U registrátora (Wedos, Forpsi, Cloudflare…) nastavte DNS:
   - `CNAME` záznam pro `www` → `VASE-JMENO.github.io`
   - nebo `A` záznamy pro kořenovou doménu na IP: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
2. V **Settings → Pages → Custom domain** zadejte svoji doménu.
3. Zaškrtněte **Enforce HTTPS** (certifikát se vydá automaticky, může to trvat pár desítek minut).

## Jak zprovoznit odesílání formuláře

GitHub Pages hostuje pouze statické soubory — neumí zpracovat formulář. Možnosti:

| Řešení                           | Poznámka                                                    |
| -------------------------------- | ----------------------------------------------------------- |
| [Formspree](https://formspree.io) | Nejjednodušší — změníte `action` formuláře na jejich URL     |
| [Web3Forms](https://web3forms.com) | Zdarma, bez registrace, pouze přidání API klíče do formuláře |
| `mailto:` odkaz                  | Otevře e-mailového klienta, žádný backend                    |
| Vlastní backend                  | Node.js/Python API na Vercelu či Renderu — už mimo GitHub Pages |

Příklad s Formspree — v `index.html` upravte:

```html
<form class="contact-form" action="https://formspree.io/f/VAS-KOD" method="POST"></form>
```

## Co upravit jako první

| Kde                    | Co                                              |
| ---------------------- | ----------------------------------------------- |
| `index.html` – `<title>`, `<meta description>` | Název a popis pro vyhledávače |
| Sekce hero             | Nadpis, podtitulek a tlačítka                   |
| Sekce Služby           | Šest karet s vaší nabídkou                      |
| Sekce Ukázky           | Nahradit typové projekty reálnými realizacemi   |
| Sekce Kontakt          | E-mail, lokalita                                |
| `css/style.css`        | `--color-primary` pro změnu akcentní barvy      |
