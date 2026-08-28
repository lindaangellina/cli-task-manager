import type { Task, TaskStats } from "@apptypes/task.types";

export function tampilkanDaftarTask(tasks: Task[]): void {
  if (tasks.length === 0) {
    console.log("Tidak ada task.");
    return;
  }

  console.log("ID".padEnd(4) + "STATUS".padEnd(14) + "PRIORITAS".padEnd(12) + "JUDUL");
  console.log("-".repeat(50));

  tasks.forEach((t) => {
    const statusLabel = 
      t.status === "todo" ? "[ ] todo" :
      t.status === "in_progress" ? "[~] progress" :
      "[x] done";
    
    const baris = `${String(t.id).padEnd(4)}${statusLabel.padEnd(14)}${t.prioritas.padEnd(12)}${t.judul}`;
    console.log(baris);
  });

  console.log(`\nTotal: ${tasks.length} task`);
}

export function tampilkanStats(stats: TaskStats): void {
  console.log("=== Statistik Task ===");
  console.log(`Total     : ${stats.total}`);
  console.log(`Todo      : ${stats.todo}`);
  console.log(`In Progress: ${stats.inProgress}`);
  console.log(`Done      : ${stats.done}`);
  console.log(`Selesai   : ${stats.persentaseSelesai}%`);
}

export function tampilkanHelp(): void {
  console.log(`
CLI Task Manager — Perintah yang tersedia:

  add "judul task"          Tambah task baru
  list                      Lihat semua task
  list --status todo        Filter task berdasarkan status
  done <id>                 Tandai task selesai
  progress <id>             Tandai task sedang dikerjakan
  delete <id>                Hapus task
  search "kata kunci"       Cari task berdasarkan judul
  stats                     Lihat statistik
  help                      Tampilkan bantuan ini
  `);
}

export function tampilkanError(pesan: string): void {
  console.log(`❌ Error: ${pesan}`);
}

export function tampilkanSukses(pesan: string): void {
  console.log(`✅ ${pesan}`);
}