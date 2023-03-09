import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'
import { logger } from "../utils/Logger.js"

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .put('', this.editAccount)
  }
  async editAccount(req, res, next) {

    try {
      const account = await accountService.getAccount(req.userInfo)
      logger.log(account, 'this is the account')
      const accountData = req.body
      logger.log(accountData, 'this is the account data')
      const updatedAccount = await accountService.updateAccount(req.userInfo, accountData)
      return res.send(updatedAccount)

    } catch (error) {
      next(error)
    }

  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }
}
