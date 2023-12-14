export interface MyData {
  id: number
  name: string
  uniqueId: string
  status: string
  disabled: boolean
  lastUpdate: string
  positionId: number
  groupId: number
  phone: string
  model: string
  contact: string
  category: string
  attributes: object
}

export interface IDeleteProps {
  id: number
}

export interface Result {
  id: number
  name: string
  lastUpdate: string
  status: string
  positionId: string
  uniqueId: string
}
