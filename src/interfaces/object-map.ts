import { Entity } from './entity'

export type ObjectMap<T extends Entity> = {
  [id: string]: T
}