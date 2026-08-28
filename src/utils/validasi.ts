import type { Priority, TaskStatus } from "../types/task.types";

export function isJudulValid(judul: string): boolean {
  return judul.length >= 3 ;
}

export function isIdValid(id: unknown): id is number {
  return Number.isInteger(id);
}

export function isPriorityValid(p: string): p is Priority {
  return ["low", "medium", "high", "urgent"].includes(p);
}

export function isStatusValid(s: string): s is TaskStatus {
  return ["todo", "in_progress", "done"].includes(s);
}