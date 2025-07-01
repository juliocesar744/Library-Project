import { describe, it, expect } from 'vitest'
import { CreateBookService } from './CreateBookService'

describe('CreateBookService', () => {
  it('deve lançar erro se o livro já existir', async () => {
    const service = new CreateBookService()

    await expect(service.execute({
      title: 'Dom Casmurro',
      category: 'FICCAO',
      price: 30,
      edition: '1ª',
      yearofpublication: 1899,
      publisher_id: 2
    })).rejects.toThrowError('Livro já existe')
  })
})