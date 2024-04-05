# 🧮 CLI Calculator

A simple command-line calculator application that supports basic arithmetic operations and more advanced features like exponentiation, square root, and trigonometric functions, more features will be added in the future.

## 🏃 ️Run

To run the calculator, simply execute the following command in the terminal:

```bash
pnpm dlx intcalc
```

## 🚀 Usage

### ℹ️ Help

```bash
Usage:  [options] [command] [<expression>...]

Arithmetic expression to evaluate

Arguments:
  <expression>              Arithmetic expression to evaluate

Options:
  -V, --version             output the version number
  -p, --precision <number>  Specify the number of decimal places to round the result to
  -f, --file <path>         Read expression from file
  -o, --output <path>       Output result to file
  -h, --help                display help for command

Commands:
  store <value>             Store a value in memory
  recall                    Recall the value stored in memory
  clear                     Clear the value stored in memory
```

### 🔢 Available operations

The calculator supports the following operations:

- Addition: `+`
- Subtraction: `-`
- Multiplication: `*`
- Division: `/`
- Exponentiation: `^`
- Square root: `sqrt`
- Trigonometric functions: `sin`, `cos`, `tan`

### 🛠️ Additional features

- Modify memory and use it in calculations, you can also reset it to zero.
- Output the result in a file.
- Specify the number of decimal places to round the result to.
- Specify the file to read the input from.
- [ ] Specify whether your trigonometric functions are in degrees or radians.

## 🏃‍♂️ Run locally

1. Clone the repository:

```bash
git clone https://github.com/saadfrhan/intcalc
```

1. Install the dependencies:

```bash
pnpm install
```

1. Link the package:

```bash
pnpm link-cli
```

1. Run the calculator:

```bash
intcalc
```

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated. Star the project if you like it.

- Fork the Project
- Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
- Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
- Push to the Branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request
