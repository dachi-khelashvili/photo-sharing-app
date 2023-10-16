export * as Todos from './todos.type';

export interface ResponseGenerator<DataType = unknown> {
  config?: unknown;
  data: DataType;
  headers?: unknown;
  request?: unknown;
  status?: number;
  statusText?: string;
}
