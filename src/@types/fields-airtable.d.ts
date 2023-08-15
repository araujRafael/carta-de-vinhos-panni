export interface VinhosField {
  descrição: string
  imagem?: Imagem[]
  desconto: number
  "em estoque": boolean
  uva: string
  codigo: string
  preço: number
  origem: string
  "cor vinho": string[]
  nome: string
}

export interface Imagem {
  id: string
  width: number
  height: number
  url: string
  filename: string
  size: number
  type: string
  thumbnails: Thumbnails
}

export interface Thumbnails {
  small: Small
  large: Large
  full: Full
}

export interface Small {
  url: string
  width: number
  height: number
}

export interface Large {
  url: string
  width: number
  height: number
}

export interface Full {
  url: string
  width: number
  height: number
}
