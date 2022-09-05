import {  IsString, IsNotEmpty } from 'class-validator'

export class AuthDto {
	@IsString()
	@IsNotEmpty()
	name: string;

	@IsString()
	@IsNotEmpty()
	password: string;
}