import * as chalk from 'chalk'
import * as inquirer from 'inquirer'
import * as CLI from 'clui'

export const Spinner = CLI.Spinner

export function log(value: string) {
  console.log(value)
}
export function error(value: string) {
  console.error(chalk.red(` ❌  ${value}`))
}
export function success(value: string) {
  console.log(chalk.green(` ✔️  ${value}`))
}
export function warn(value: string) {
  console.log(chalk.yellow(` ❗  ${value}`))
}
export async function run(name: string, callback: Promise<any>) {
  let countdown = new Spinner(name, ['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷'])
  callback
    .catch(async reason => {
      countdown.stop();
      error(name)
      log(reason)
      await shouldContinue()
    })
    .then(value => {
      countdown.stop();
      success(name)
    })
}
export async function shouldContinue() {
  const yes = await confirm('Do You Want To Continue')
  if (yes) {
    log(`Continuing`)
  } else {
    process.exit(1)
  }
}
export function info(value: string) {
  console.log(chalk.blue(` 💁  ${value}`))
}
export async function confirm(value: string) {
  const answer = await inquirer.prompt({
    type: 'confirm',
    message: value,
    name: 'confirm',
  })
  return answer.confirm
}