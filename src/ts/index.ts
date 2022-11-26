
type Operation = "ADD" | "SUBTRACT" | "MULTIPLY" | "DIVIDE" | "EXPONENTIATION" | "MODULUS";

type AnswersI = {
  first_num: number;
  operation: Operation;
  second_num: number;
}

export default AnswersI;