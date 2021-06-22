import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOffers1624320772614 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'offers',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'product_id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'offer_price',
            type: 'decimal',
            isNullable: false,
          },
          {
            name: 'start_date',
            type: 'timestamp with time zone',
          },
          {
            name: 'end_date',
            type: 'timestamp with time zone',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'OfferProduct',
            columnNames: ['product_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'products',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('offers');
  }
}
