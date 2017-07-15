"use strict"

const program = require('commander')

function loadCommand(cmd)
{
  if (cmd)
  {
    return require("./commands/" + cmd + ".js")
  }
  else throw new Error("Invalid command given" + cmd)
}

//Setting up program commands
program
  .description("ADR: Architecture Decision Records Utility")
  .version('0.0.1')
  .usage("<command> args")
  .command("init [directory]")
    .description("Initialize ADR in the current or given directory")
    .action(loadCommand('init'))

program.command("new <title...>")
    .description("Create a new ADR with the given title")
    .action(loadCommand('new'))

program.command("accept <adrID>")
    .description("Accept the ADR with the given ID")
    .action(loadCommand('accept'))

program.command("list")
    .description("List all current ADRs in this project")
    .action(loadCommand('list'))
  
program.command("status <adrID>")
    .description("Return the status of the ADR designated by the given ID")
    .action(loadCommand('status'))

program.parse(process.argv)

if (!program.args.length) {
   console.error('No command provided');
   program.help()
}