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

## CI/CD

Live: **https://ibrahim-azzam.vercel.app** (Vercel project `ibrahim-azzam`, Hobby plan, gratis).

| Event | CI (GitHub Actions, [`ci-cd.yml`](.github/workflows/ci-cd.yml)) | CD (Vercel Git Integration) |
|---|---|---|
| Push ke `main` | lint + build | deploy **Production** |
| Pull request | lint + build | deploy **Preview**, link dikomentari di PR |

Tidak perlu secret apa pun: repo GitHub sudah tersambung ke project Vercel.
Kalau build gagal, Vercel tidak mengganti versi production yang sedang live.

Deploy manual dari laptop (jarang perlu): `vercel deploy --prod`
