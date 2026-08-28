import TaskRepository from "@repositories/TaskRepository";
import TaskModel from "@models/Task";
import type { Task, TaskStatus, Priority, TaskStats } from "@apptypes/task.types";

export default class TaskService {
  private repo: TaskRepository;

    constructor(tasks: Task[] = []) {
    this.repo = new TaskRepository();
    this.repo.muatDariArray(tasks);
  }

  tambahTask(judul: string, prioritas?: Priority): Task {
    const taskBaru = new TaskModel(0, judul, prioritas);
    const { id, ...dataTanpaId } = taskBaru;
    return this.repo.create(dataTanpaId);
  }

getSemuaTask(): Task[] {
  return this.repo.findAll();
}

getTaskByStatus(status: TaskStatus): Task[] {
  return this.repo.findByStatus(status);
}

ubahStatus(id: number, status: TaskStatus): Task | undefined {
  return this.repo.update(id, { status });
}

hapusTask(id: number): boolean {
  return this.repo.delete(id);
}

cariTask(keyword: string): Task[] {
  return this.repo.search(keyword);
}

getStats(): TaskStats {
  const semua = this.repo.findAll();
  const done = semua.filter(t => t.status === "done").length;

  return {
    total: semua.length,
    todo: semua.filter(t => t.status === "todo").length,
    inProgress: semua.filter(t => t.status === "in_progress").length,
    done,
    persentaseSelesai: semua.length === 0 ? 0 : Math.round((done / semua.length) * 100)
  };
}

}