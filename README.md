nitro
=====

Creates NextJS WPAs from templates

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/nitro.svg)](https://npmjs.org/package/nitro)
[![Downloads/week](https://img.shields.io/npm/dw/nitro.svg)](https://npmjs.org/package/nitro)
[![License](https://img.shields.io/npm/l/nitro.svg)](https://github.com/williamluke4/nitro/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g nitro
$ nitro COMMAND
running command...
$ nitro (-v|--version|version)
nitro/0.0.0 win32-x64 node-v12.0.0
$ nitro --help [COMMAND]
USAGE
  $ nitro COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`nitro hello [FILE]`](#nitro-hello-file)
* [`nitro help [COMMAND]`](#nitro-help-command)

## `nitro hello [FILE]`

describe the command here

```
USAGE
  $ nitro hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ nitro hello
  hello world from ./src/hello.ts!
```

_See code: [src\commands\hello.ts](https://github.com/williamluke4/nitro/blob/v0.0.0/src\commands\hello.ts)_

## `nitro help [COMMAND]`

display help for nitro

```
USAGE
  $ nitro help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src\commands\help.ts)_
<!-- commandsstop -->
