import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
} from 'typeorm'

export default class CreateItens1601382288041 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'itens',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'user_id',
            type: 'uuid',
            isNullable: true
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'description',
            type: 'varchar'
          },
          {
            name: 'price',
            type: 'decimal'
          },
          {
            name: 'image',
            type: 'varchar'
          }
        ]
      })
    )

    await queryRunner.createForeignKey(
      'itens',
      new TableForeignKey({
        name: 'UserItem',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('itens', 'UserItem')

    await queryRunner.dropTable('itens')
  }
}
