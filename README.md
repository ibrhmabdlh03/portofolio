# Portfolio — Ibrahim Abdullah Azzam

Website portofolio bergaya *company profile* (terinspirasi tampilan about.meta.com): putih bersih, aksen biru, kartu membulat, ilustrasi topologi jaringan.

- **Stack**: React 19 + Vite 7, CSS biasa (tanpa framework CSS), `react-icons`.
- **Isi**: semua teks ada di [`src/data.js`](src/data.js). Ubah di sana saja.
- **Proyek confidential**: set `confidential: true` → tanpa tautan, tanpa nama klien, ilustrasi diburamkan + label "Confidential".
- **CV**: taruh PDF di `public/` lalu isi `profile.resume = '/nama-file.pdf'` agar tombol *Download CV* muncul.

## Jalankan lokal

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # hasil di dist/
```

## CI/CD ke Vercel (gratis, Hobby plan)

Workflow: [`.github/workflows/ci-cd.yml`](.github/workflows/ci-cd.yml)

| Event | Yang terjadi |
|---|---|
| Push / PR | `npm ci` → `npm run lint` → `npm run build` |
| Pull request | Deploy **Preview** ke Vercel, link dikomentari di PR |
| Push ke `main` | Deploy **Production** ke Vercel |

### Setup sekali saja

1. Buat akun di https://vercel.com (login pakai GitHub).
2. Buat token: **Vercel → Account Settings → Tokens → Create** → salin.
3. Hubungkan project (di laptop, dari folder repo ini):
   ```bash
   npx vercel login
   npx vercel link        # pilih "create new project", nama mis. ibrahim-azzam
   cat .vercel/project.json   # berisi orgId dan projectId
   ```
4. Di GitHub: **repo → Settings → Secrets and variables → Actions → New repository secret**:
   - `VERCEL_TOKEN` = token langkah 2
   - `VERCEL_ORG_ID` = `orgId`
   - `VERCEL_PROJECT_ID` = `projectId`
5. **Matikan auto-deploy bawaan Vercel** agar tidak deploy dua kali: Vercel → Project → Settings → Git → *Disconnect* repo (deploy sepenuhnya lewat GitHub Actions).
6. Jalankan ulang: **Actions → CI-CD → Run workflow** (atau push commit baru).

Folder `.vercel/` sudah di-`.gitignore`.
