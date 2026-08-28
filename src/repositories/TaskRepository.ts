import {Repository} from "./Repository";
import type { Task, TaskStatus, Priority } from "../types/task.types";

export default class TaskRepository extends Repository<Task> {
  
  findByStatus(status: TaskStatus): Task[] {
    return this.findAll().filter((item) => item.status === status);
  }

  findByPrioritas(prioritas: Priority): Task[] {
    return this.findAll().filter((item) => item.prioritas === prioritas);
  }

  search(keyword: string): Task[] {
    return this.findAll().filter((item) => 
      item.judul.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  muatDariArray(tasks: Task[]): void {
  this.items = tasks;
  const idTertinggi = tasks.reduce((max, t) => Math.max(max, t.id), 0);
  this.nextId = idTertinggi + 1;
}
}