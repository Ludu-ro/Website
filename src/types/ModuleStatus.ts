export interface ModuleStatus {
    id: string;
    status: Status;
  }
  
export enum Status {
    NotStarted,
    Started,
    Finished
  }