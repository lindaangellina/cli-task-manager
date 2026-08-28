import type { Command } from "@apptypes/command.types";
import type TaskService from "@services/TaskService";
import { isJudulValid } from "@utils/validasi";
import { tampilkanDaftarTask, tampilkanStats, tampilkanHelp, tampilkanError, tampilkanSukses } from "@cli/display";

export function jalankanCommand(command: Command, service: TaskService): void {
  switch (command.type) {
    case "add": {
      if (!isJudulValid(command.judul)) {
        return tampilkanError("Judul task minimal 3 karakter");
      }
      const task = service.tambahTask(command.judul);
      return tampilkanSukses(`Task #${task.id} berhasil ditambahkan`);
    }

    case "list": {
      const tasks = command.filterStatus
        ? service.getTaskByStatus(command.filterStatus)
        : service.getSemuaTask();
      return tampilkanDaftarTask(tasks);
    }

    case "done": {
      const task = service.ubahStatus(command.id, "done");
      if (!task) return tampilkanError(`Task #${command.id} tidak ditemukan`);
      return tampilkanSukses(`Task #${task.id} ditandai selesai`);
    }

    case "progress": {
      const task = service.ubahStatus(command.id, "in_progress");
      if (!task) return tampilkanError(`Task #${command.id} tidak ditemukan`);
      return tampilkanSukses(`Task #${task.id} ditandai sedang dikerjakan`);
    }

    case "delete": {
      const berhasil = service.hapusTask(command.id);
      if (!berhasil) return tampilkanError(`Task #${command.id} tidak ditemukan`);
      return tampilkanSukses(`Task #${command.id} berhasil dihapus`);
    }

    case "search": {
      const hasil = service.cariTask(command.keyword);
      return tampilkanDaftarTask(hasil);
    }

    case "stats": {
      const stats = service.getStats();
      return tampilkanStats(stats);
    }

    case "help":
      return tampilkanHelp();

    case "unknown":
      return tampilkanError(`Perintah tidak dikenal: "${command.input}". Ketik 'help' untuk bantuan.`);
  }
}