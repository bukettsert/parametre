export interface Task {
  id?: number;
  type?: string;
  content?: string;
  assignedTo?: string;
  status?: string;
  completed?: boolean;
}