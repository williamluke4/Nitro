# nitro

Creates NextJS WPAs from templates

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/nitro.svg)](https://npmjs.org/package/nitro)
[![Downloads/week](https://img.shields.io/npm/dw/nitro.svg)](https://npmjs.org/package/nitro)
[![License](https://img.shields.io/npm/l/nitro.svg)](https://github.com/williamluke4/nitro/blob/master/package.json)

<!-- toc -->

- [nitro](#nitro)
- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g @atto-byte/nitro
$ nitro COMMAND
running command...
$ nitro (-v|--version|version)
@atto-byte/nitro/0.0.2 win32-x64 node-v12.0.0
$ nitro --help [COMMAND]
USAGE
  $ nitro COMMAND
...
```

<!-- usagestop -->

```sh-session
$ npm install -g @atto-byte/nitro
$ nitro COMMAND
running command...
$ nitro (-v|--version|version)
@atto-byte/nitro/0.0.1 win32-x64 node-v12.0.0
$ nitro --help [COMMAND]
USAGE
  $ nitro COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`nitro create [TEMPLATE]`](#nitro-create-template)
- [`nitro help [COMMAND]`](#nitro-help-command)

## `nitro create [TEMPLATE]`

nitro create basic

```
USAGE
  $ nitro create [TEMPLATE]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ nitro create basic something-awesome
  hello world from ./src/hello.ts!
```

_See code: [src\commands\create.ts](https://github.com/williamluke4/nitro/blob/v0.0.2/src\commands\create.ts)_

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

- [`nitro create [TEMPLATE]`](#nitro-create-template)
- [`nitro help [COMMAND]`](#nitro-help-command)

## `nitro create [TEMPLATE]`

nitro create basic

```
USAGE
  $ nitro create [TEMPLATE]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ nitro create basic something-awesome
  hello world from ./src/hello.ts!
```

_See code: [src\commands\create.ts](https://github.com/williamluke4/nitro/blob/v0.0.1/src\commands\create.ts)_

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
