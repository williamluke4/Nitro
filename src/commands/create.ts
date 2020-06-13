import {Command, flags} from '@oclif/command'
import * as path from 'path'
import * as inquirer from 'inquirer'
import * as logger from '../logger'
import * as fs from 'fs-extra'
import {templatesPath, examplePath, getDirectories} from '../directories'
import chalk = require('chalk');

export default class Create extends Command {
  static description = 'nitro create basic ';

  static examples = [
    `$ nitro create basic something-awesome
hello world from ./src/hello.ts!
`,
  ];

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
  };

  static args = [{name: 'template'}];

  async run() {
    const {args, flags} = this.parse(Create)
    const allTemplates = getDirectories(templatesPath)
    const responses = await inquirer.prompt([
      {
        name: 'template',
        message: 'Select a template: ',
        type: 'list',
        choices: allTemplates,
      },
      {
        name: 'name',
        message: 'Project Name',
        type: 'string',
      },
    ])
    const template = responses.template
    const name = !responses || responses.name === '.' ? null : responses.name
    const templateLocation = path.join(templatesPath, template)
    await logger.run(
      'Copying Files',
      fs.copy(
        path.join(templatesPath, template),
        name ? path.join(process.cwd(), name) : path.join(process.cwd())
      )
    )
    const rawdata: any = fs.readFileSync(
      path.join(templateLocation, 'package.json')
    )
    const pkg = JSON.parse(rawdata)
    logger.title(' Scripts ')
    Object.keys(pkg.scripts).map(cmd => {
      logger.log(`\t ${chalk.bold(cmd)}\t: ${pkg.scripts[cmd]}`)
    })
  }
}
