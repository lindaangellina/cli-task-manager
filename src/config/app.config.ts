interface AppConfig {
    appName: string;
    version: string;
    maxTasks: number;
}

export const APP_CONFIG: AppConfig = {
    appName: "cli-task-manager",
    version: "1.0.0",
    maxTasks: 1000,
}