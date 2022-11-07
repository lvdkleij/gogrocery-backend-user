import {
	Table,
	Column,
	Model,
	DataType,
	HasOne,
	CreatedAt,
	HasMany,
} from 'sequelize-typescript';
import { UserRefreshToken } from './userRefreshToken.model';
import { UserVerification } from './userVerification.model';

@Table({
	tableName: 'app_user',
	timestamps: true,
	updatedAt: false,
	underscored: true,
})
export class AppUser extends Model {
	@Column({
		type: DataType.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	})
	id!: number;

	@Column({
		type: DataType.STRING(60),
		allowNull: false,
		unique: true,
	})
	email!: string;

	@CreatedAt
	createdAt!: Date;

	@Column({
		type: DataType.STRING(60),
		allowNull: false,
	})
	name!: string;

	@HasOne(() => UserVerification)
	verification!: UserVerification;

	@HasMany(() => UserRefreshToken)
	refreshTokens!: UserRefreshToken[];
}

export const AppUserSchema = `
type AppUser {
	id: Int!
	email: String!
	name: String!
	createdAt: String!
	verification: UserVerification!
	refreshTokens: [UserRefreshToken]
}`;