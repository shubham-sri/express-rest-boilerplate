import { UserPermissions } from '../../types'
import { Common } from '../common'

export class JwtRole extends Common {
  public readonly id: number
  public readonly name: string
  public readonly label: string

  constructor(id: number, name: string, label: string) {
    super()
    this.id = id
    this.name = name
    this.label = label
  }

  public static fromJson(json: any) {
    return new JwtRole(json.id, json.name, json.label)
  }
}

export class JwtUser extends Common {
  public readonly id: number
  public readonly deleted: boolean
  public readonly username: string
  public readonly role: JwtRole

  constructor(id: number, username: string, role: JwtRole, deleted = false) {
    super()
    this.id = id
    this.username = username
    this.role = role
    this.deleted = deleted
  }

  public static fromJson(json: any) {
    if (typeof json.role === 'object') {
      json.role = JwtRole.fromJson(json.role)
    }
    return new JwtUser(json.id, json.username, json.role, json.deleted)
  }
}

export type JwtTokenType = 'access' | 'refresh'

export class JwtPayload extends Common {
  public readonly type: JwtTokenType
  public readonly user: JwtUser
  public readonly permissions: UserPermissions[]

  constructor(
    type: JwtTokenType,
    user: JwtUser,
    permissions: UserPermissions[],
  ) {
    super()
    this.type = type
    this.user = user
    this.permissions = permissions
  }

  public static fromJson(json: any) {
    if (typeof json.user === 'object') {
      json.user = JwtUser.fromJson(json.user)
    }
    return new JwtPayload(
      json.type,
      json.user,
      json.type === 'access' ? json.permissions : [],
    )
  }
}
