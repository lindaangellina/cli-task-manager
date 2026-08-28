import { parseArgs } from "@cli/parser";
import { APP_CONFIG } from "@config/app.config";
const args = process.argv.slice(2);
const command = parseArgs(args);
console.log("Command terparsing:", command);

console.log(`=== ${APP_CONFIG.appName} v${APP_CONFIG.version} ===\n`);

// TODO: entry point CLI Task Manager — akan diisi setelah types, model,
// repository, dan service selesai dibuat.