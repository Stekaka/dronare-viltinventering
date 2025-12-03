# Pusha till GitHub - Steg för steg

## Steg 1: Skapa GitHub Repository

1. Gå till: https://github.com/new
2. Repository name: `dronare-viltinventering` (eller valfritt namn)
3. Välj Public eller Private
4. **VIKTIGT:** Lägg INTE till README, .gitignore eller license (vi har redan dessa)
5. Klicka "Create repository"

## Steg 2: Pusha projektet

Efter att du skapat repot, GitHub visar instruktioner. Kör dessa kommandon:

```bash
cd /Users/ocmac/dronare-viltinventering
git remote add origin https://github.com/DITT-ANVÄNDARNAMN/dronare-viltinventering.git
git branch -M main
git push -u origin main
```

**Ersätt `DITT-ANVÄNDARNAMN` med ditt GitHub-användarnamn!**

## Steg 3: Verifiera

Efter push, gå till din GitHub repo och kontrollera att alla filer syns.

## Steg 4: Deploya till Vercel

1. Gå till: https://vercel.com
2. Logga in med GitHub
3. Klicka "Add New Project"
4. Nu ska du se `dronare-viltinventering` i listan
5. Välj det och klicka "Deploy"

---

## Alternativ: Om du vill att jag pushar åt dig

Om du ger mig din GitHub repository URL (t.ex. `https://github.com/ditt-användarnamn/dronare-viltinventering.git`), kan jag köra push-kommandona åt dig!

