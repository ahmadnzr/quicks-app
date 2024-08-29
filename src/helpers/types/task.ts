export type TaskType = {
  id: number;
  title: string;
  done: boolean;
  date: Date | null;
  desc?: string | null;
};
