import { DocumentType } from '@typegoose/typegoose';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

export interface UserService {
    create(dto: CreateUserDto, salt: string): Promise<DocumentType<UserEntity>>;
    findByEmail(email: string): Promise<DocumentType<UserEntity> | null>;
    findOrCreate(dto: CreateUserDto, salt: string): Promise<DocumentType<UserEntity>>;
}
