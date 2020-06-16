import 'reflect-metadata'
import { inject, injectable, Container } from 'inversify'

const types = {
  baseDao: Symbol.for('baseDao'),
  adminDao: Symbol.for('adminDao'),
  name: Symbol.for('name'),
  baseService: Symbol.for('baseService'),
  adminService: Symbol.for('adminService')
}

interface IBaseDao {
  name: string
  all(): void
}

@injectable()
class BaseDao implements IBaseDao {
  public name: string
  constructor(name: string) {
    this.name = name
  }
  all() {
    console.log('baseDao')
  }
}

interface IAdminDao extends IBaseDao {
  say(): void
}

@injectable()
class AdminDao extends BaseDao implements IAdminDao {
  constructor(@inject(types.name) name: string) {
    super(name)
  }
  say() {
    this.all()
  }
}

interface IBaseService {
  getAll(): string
}

@injectable()
class BaseService implements IBaseService {
  constructor(@inject(types.baseDao) private baseDao: IBaseDao) {
    this.baseDao = baseDao
  }

  getAll() {
    return this.baseDao.name
  }

}

// interface IAdminService extends IBaseService {
//   say(): void
//   adminDao: IAdminDao
// }

@injectable()
class AdminService extends BaseService {
  constructor(@inject(types.adminDao) private adminDao: IAdminDao, @inject(types.baseDao) baseDao: IBaseDao) {
    super(baseDao)
    this.adminDao = adminDao
  }
  say() {
    console.log(this.getAll())
    console.log(this.adminDao.name)
  }
}

const container = new Container()
container.bind<IBaseDao>(types.baseDao).toConstantValue(new BaseDao('cjccc'))
container.bind<IAdminDao>(types.adminDao).to(AdminDao)
container.bind<IBaseService>(types.baseService).to(BaseService)
container.bind<AdminService>(types.adminService).to(AdminService)
container.bind<string>(types.name).toConstantValue('cjccc')

// const c = container.get<IAdminDao>(types.adminDao)
// const b = container.get<IBaseService>(types.baseService)
const d = container.get<AdminService>(types.adminService)
// console.log(b)
// console.log(c)
d.say()
// import './inject-demo'