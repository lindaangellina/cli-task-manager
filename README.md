# TypeScript Project Template

Template project TypeScript untuk PKL dengan struktur folder rapi, barrel export, declaration file, dan tsconfig yang benar.

---

## Struktur Folder
ts-project-template/
├── src/
│   ├── types/
│   │   ├── global.d.ts          ← tipe global (ID, Timestamp)
│   │   ├── entity.types.ts      ← interface Entity, Peserta, JurnalHarian
│   │   └── index.ts             ← barrel
│   │
│   ├── models/
│   │   ├── BaseModel.ts         ← abstract class dengan id & createdAt
│   │   ├── Peserta.ts           ← extends BaseModel
│   │   ├── JurnalHarian.ts      ← extends BaseModel
│   │   └── index.ts             ← barrel
│   │
│   ├── repositories/
│   │   ├── Repository.ts        ← generic repository (dari Minggu 5)
│   │   ├── PesertaRepository.ts ← extends Repository<Peserta>
│   │   └── index.ts             ← barrel
│   │
│   ├── services/
│   │   ├── PesertaService.ts    ← business logic
│   │   └── index.ts             ← barrel
│   │
│   ├── utils/
│   │   ├── format.ts            ← formatTanggal, formatNama
│   │   ├── validasi.ts          ← validasi email, nilai, nama
│   │   └── index.ts             ← barrel
│   │
│   ├── config/
│   │   └── app.config.ts        ← konstanta aplikasi
│   │
│   └── index.ts                 ← entry point, demo penggunaan
│
├── tsconfig.json                ← konfigurasi lengkap dengan path alias
├── package.json                 ← dengan npm scripts
├── .gitignore                   ← lengkap
└── README.md                    ← dokumentasi cara menjalankan


---


## Cara Menjalankan

```bash
npm install
npm run build
npm start
