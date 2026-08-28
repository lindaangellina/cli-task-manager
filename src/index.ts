import { parseArgs } from "./cli/parser";
import { jalankanCommand } from "./cli/commands";
import TaskService from "./services/TaskService";
import { StorageService } from "./services/StorageService";

// Muat data saat start
const dataTersimpan = StorageService.muat();
const service = new TaskService(dataTersimpan);

// Jalankan command
const command = parseArgs(process.argv.slice(2));
jalankanCommand(command, service);

// Simpan data setelah command selesai
StorageService.simpan(service.getSemuaTask());