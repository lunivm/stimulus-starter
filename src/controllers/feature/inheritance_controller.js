import InheritanceController from '../inheritance_controller'

export default class extends InheritanceController {
  static targets = ['self']

  connect() {
    console.log('!!! targets', InheritanceController.targets)
    super.connect()
    console.log('this.itemTarget.value child', this.itemTarget.value)
    console.log('this.selfTarget.value child', this.selfTarget.value)
  }
}
