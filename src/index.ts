import { Peserta, JurnalHarian } from "@models/index";
import { PesertaRepository } from "@repositories/index";
import { formatTanggal, isEmailValid } from "@utils/index";
import { APP_CONFIG } from "@config/app.config";

console.log(`=== ${APP_CONFIG.AppName} v${APP_CONFIG.version} ===\n`);

const repo = new PesertaRepository();
const lindaObj = new Peserta(0, new Date().toISOString(), "Linda Angellina", "SMK 5 Malang", 1, "linda@mail.com", "XII PPLG 2");
const sukmaObj = new Peserta(0, new Date().toISOString(), "Aura Sukma", "SMK 2 Malang", 2, "sukma@mail.com", "XII PPLG 1");

const linda = repo.create(lindaObj);
const sukma = repo.create(sukmaObj);

const jurnalLinda = new JurnalHarian(
    1,
    new Date().toISOString(),
    "Belajar TypeScript Template",
    "https://github.com/linda/ts-project"
);

console.log(`\nJurnal Linda: ${jurnalLinda.kegiatan} | Link: ${jurnalLinda.linkCommit}`);

console.log("Peserta terdaftar:");
repo.findAll().forEach((p) => {
    console.log(`- [${p.id}] ${p.nama} (${p.sekolah}) - Fase ${p.fase}`);
});

console.log(`\nTotal: ${repo.findAll().length} peserta`);
console.log(`Email valid: ${isEmailValid(linda.email)}`);
console.log(`Email valid: ${isEmailValid(sukma.email)}`);
console.log(`Tanggal: ${formatTanggal(new Date())}`);