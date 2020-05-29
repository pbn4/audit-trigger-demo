import {MigrationInterface, QueryRunner} from "typeorm";
const fs = require('fs').promises;

export class initial1590745818856 implements MigrationInterface {
    name = 'initial1590745818856'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "photo" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "filename" character varying NOT NULL, "views" integer NOT NULL, "isPublished" boolean NOT NULL, CONSTRAINT "PK_723fa50bf70dcfd06fb5a44d4ff" PRIMARY KEY ("id"))`);
        const auditSql = await fs.readFile(`${__dirname}/audit.sql`, "utf-8");
        await queryRunner.query(auditSql);
        await queryRunner.query(`SELECT audit.audit_table('photo')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "photo"`);
    }

}
