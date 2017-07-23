
# ADR Flow Tools

This project aims to provide a command line tool to work with [Architecture Decision Records](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions) (ADRs).

This grew out of my need to have this kind of tool when working in a Windows OS.  
The only option I found was the [ADR tools](https://github.com/npryce/adr-tools) project, which didn't work as easily in Windows. Still, it inspired this project.

This project is implemented as a series of Node.js scripts, with the relevant packages to support different functionality. It is packaged as a single binary using [pkg](https://github.com/zeit/pkg). Using `pkg` allows us also to package this as an executable for other platforms.

As a tool, the ADR flow is implemented with a simple command line interface (CLI). This is intended to offer both a simple operation, and thus flexibility.  
It is also intended to be used in conjunction with other command lines. So where applicable, some command outputs can be pipelined for example.  


## Usage

The tool is a simple command line, used to make the job of manipulating and exploring ADRs more easy.  
It is however intended to be used directly with the ADR files on the file system. The idea being that these files are present right next to the source code, managed in source control, etc.

At any point, you can invoke the tool with the `help` switch to list available commands:
```
adr --help
```

You can also list help for a specific command, e.g. 
```
adr link -h
```
which will show a description of the `link` command.

### Initializing ADR Management
Given that you have the executable file, navigate to your project's root and initialize the ADR handling for this project:
```
adr init
```
This will create a default directory under your project root (`doc/adr`) which will contain the ADR files.  
You can also specify a different directory as part of the command.

### Configuration
The `init` command creates a `.adr` file in the ADR directory. _Don't move or rename this file_.  
This file also contains configuration for the tool. At the momeny it includes only the path to the editor that will be launched when writing an ADR.  
It's a simple properties file with a single property: `editor` which should have the full path to the text editor of you liking.

### Creating a New ADR
Creating a new ADR is done simply with the `new` command, followed by the title:
```
adr new Some Title
```
This will create a new ADR with the given title in it. It will assign it with a new available ID.

### Accepting an ADR
If an ADR is to be accepted, you can invoke the `accept` command:
```
adr accept 3
```
In this example, ADR #3 will be marked as accepted. This will add an `Accepted` entry in the ADR file, with the relevant date.

### Listing ADRs
You can also list all the available ADRs:
```
adr list
```
This will list all the ADRs with their file names and IDs.
You have the option to use the `-b` (`--bare`) option to output only the file names:
```
adr list -b
```
This might be useful for integration with other command line tools.

### Exporting ADRs
You can also export ADRs to HTML with the `export` command:
```
adr export 3 adr3.html
```
This will create a file called `adr3.html` with the content converted to HTML (using [marked](https://github.com/chjj/marked)).

Note that you can omit the output file argument, causing the output to spill out to standard error. This can be useful if you want to integrate with other command line tools.

## Contributions
Contributions are more than welcome of course.  
Please make sure to follow conventions where applicable, and that all tests pass of course.

To execute tests, simply run `npm test`

### Creating a Binary
Use `pkg` to create the executable. This will require node v6 and above.  

`pack.bat` runs `pkg` that is globally installed, building a windows executable.



## License

Copyright (c) 2017 Lior Schejter

MIT License.  
See the [LICENSE](./LICENSE) file for more details.