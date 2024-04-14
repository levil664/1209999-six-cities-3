import { defaultClasses, getModelForClass, prop, modelOptions } from '@typegoose/typegoose';
import { User } from '../../types';
import { createSHA256 } from '../../helpers';


export interface UserEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'users'
  }
})

export class UserEntity extends defaultClasses.TimeStamps implements User {
    @prop({ required: true, default: '' })
  public name: string;

    @prop({ required: true, default: '' })
    private password?: string;

    @prop({ unique: true, required: true })
    public email: string;

    @prop({ required: false, default: '' })
    public avatarPath: string;

    constructor(userData: User) {
      super();

      this.name = userData.name;
      this.email = userData.email;
      this.avatarPath = userData.avatarPath;
    }

    public setPassword(password: string, salt: string) {
      this.password = createSHA256(password, salt);
    }

    public getPassword() {
      return this.password;
    }
}

export const UserModel = getModelForClass(UserEntity);
