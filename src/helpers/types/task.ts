export type TaskType = {
  id: number;
  title: string;
  done: boolean;
  due: string;
  remeaning: string;
  date: Date | null;
  desc: string | null;
};
