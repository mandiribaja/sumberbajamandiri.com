# Sumber Baja Mandiri — Tools, Theme, dan GitHub Actions

Struktur dan cara kerja **sama dengan betoncorplus**; yang berbeda hanya brand, niche (besi & baja), dan tampilan theme (biru–merah, lebih ringan tanpa Bootstrap/jQuery).

## 1. Pasang
Ekstrak isi paket ini ke root project (`C:\Hugo\projects\sumberbajamandiri.com`). Folder `themes/` sudah ada.

```
npm install          # membuat package-lock.json — commit file ini (workflow memakai npm ci)
hugo server -D       # lihat situsnya
```

## 2. Yang WAJIB diisi
| Apa | Di mana |
|---|---|
| Kontak: `phone`, `telepon`, `whatsapp`, `checkoutWa`, `email`, `address` | `hugo.toml` → `[params]` |
| URL menu sesuai folder `content/categories/<folder>/` Anda | `hugo.toml` → `[[menu.main]]` |
| Logo (ganti `static/images/logo-sbm.svg`) dan `banner` (opsional) | `static/images/` |
| Data shortcode `{{< table-tables table="table1|table2|table3" >}}` | `hugo.toml` (`tabelItems`, `appliList`, `kegunaanList`, `pumpItems`) |
| Testimoni (hanya ulasan asli), promo, skills, projects | `hugo.toml` (contoh ada di komentar) |

Warna diubah di blok `:root` pada `themes/hugo-bangunan/assets/css/styles.css`.

## 3. Secrets GitHub (sama seperti BCP)
`CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_API_TOKEN` (boleh banyak, pisah koma), dan secret GSC/Serper/IndexNow yang sama dengan yang dipakai di betoncorplus (lihat bagian `env:` tiap workflow). Kirim juga situs ke Google Search Console dengan URL `https://sumberbajamandiri.com/`.

## 4. Perintah
```
npm run generate:dry   # simulasi pembuatan artikel (tanpa API)
npm run generate       # buat artikel baru ke content/categories/blog/
npm run dedup          # cari artikel yang terlalu mirip -> candidates.json
npm run revise         # dry-run revisi (pakai --apply --limit=N untuk menerapkan)
npm run find-orphans   # cari artikel tanpa tautan masuk -> orphans.json
npm run fix-orphans    # dry-run penyisipan tautan internal
npm run build          # hugo --minify + sitemap terkompresi + robots.txt
```

## 5. Catatan penyesuaian dari BCP
- Prompt artikel/revisi/gambar sudah diganti ke niche besi & baja. Cek dan sesuaikan gaya bahasa di `tools/prompts/*.json`.
- Watermark gambar AI opsional: `static/images/watermark-sbm.png`. Gambar cadangan: `static/images/placeholder.svg`.
- Workflow memakai branch `master` (sama dengan BCP). Jika repo memakai `main`, ganti di semua `.github/workflows/*.yml`.
- Footer menampilkan kredit desainer tema (Bangunan.co). Tautan "Powered by" bersifat opsional: `params.poweredBy`.
- Format front matter & struktur folder konten diatur manual oleh Anda; tools mengasumsikan pola BCP: `content/categories/<folder>/slug.md` dengan `title`, `date`, `categories: "[folder]"`.
- `recycle-posts.js` menganggap artikel berumur > 12 bulan perlu "didaur ulang". Jika banyak artikel lama, run pertama akan menyentuh banyak file sekaligus.
