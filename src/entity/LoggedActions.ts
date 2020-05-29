import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

// NOTE: Generated with `yarn run typeorm-model-generator  -d audit -p 5432 -u username -e postgres -s audit`

@Index("logged_actions_action_idx", ["action"], {})
@Index("logged_actions_action_tstamp_tx_stm_idx", ["actionTstampStm"], {})
@Index("logged_actions_pkey", ["eventId"], { unique: true })
// NOTE: @Index("logged_actions_relid_idx", ["relid"], {})
@Entity("logged_actions", { schema: "audit" })
export class LoggedActions {
  @PrimaryGeneratedColumn({ type: "bigint", name: "event_id" })
  eventId!: string;

  @Column("text", { name: "schema_name" })
  schemaName!: string;

  @Column("text", { name: "table_name" })
  tableName!: string;

  @Column("text", { name: "session_user_name", nullable: true })
  sessionUserName!: string | null;

  @Column("timestamp with time zone", { name: "action_tstamp_tx" })
  actionTstampTx!: Date;

  @Column("timestamp with time zone", { name: "action_tstamp_stm" })
  actionTstampStm!: Date;

  @Column("timestamp with time zone", { name: "action_tstamp_clk" })
  actionTstampClk!: Date;

  @Column("bigint", { name: "transaction_id", nullable: true })
  transactionId!: string | null;

  @Column("text", { name: "application_name", nullable: true })
  applicationName!: string | null;

  @Column("inet", { name: "client_addr", nullable: true })
  clientAddr!: string | null;

  @Column("integer", { name: "client_port", nullable: true })
  clientPort!: number | null;

  @Column("text", { name: "client_query", nullable: true })
  clientQuery!: string | null;

  @Column("text", { name: "action" })
  action!: string;

  @Column("hstore", { name: "row_data", nullable: true })
  rowData!: string | null;

  @Column("hstore", { name: "changed_fields", nullable: true })
  changedFields!: string | null;

  @Column("boolean", { name: "statement_only" })
  statementOnly!: boolean;

  /* NOTE
    Unsupported column type
    @Column("oid", { name: "relid" })
    relid!: any;
   */
}
