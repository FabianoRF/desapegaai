import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm'

import User from './User'

@Entity('itens')
class Item {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  user_id: string

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  price: number

  @Column()
  image: string
}

export default Item
