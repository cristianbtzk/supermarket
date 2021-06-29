export interface IAuthProvider {
  sign(userId: string): Promise<string>;
}
