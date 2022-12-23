export interface RubricModel {
  id: number;
  title: string;
  url: string;
  children: RubricModel[];
  count: number;
}
