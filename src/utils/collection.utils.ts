import { Entity, ObjectMap } from '../interfaces'

export const mapToArray = <T extends Entity>(map: ObjectMap<T>): T[] => {
  return Object.keys(map).map(id => map[id])
}

export const mapObject = <T extends Entity, U>(map: ObjectMap<T>, transform: (_: T) => U): U[] => {
  return mapToArray(map).map(transform)
}