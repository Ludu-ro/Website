export interface ModuleStatus {
    id: string;
    status: Status;
  }
  
export enum Status {
    NotStarted = "notstarted",
    Started = "started",
    Finished = "finished"
  }