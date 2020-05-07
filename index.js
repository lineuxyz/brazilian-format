function useMoney(value) {
  const number = String(value)
  .replace(/\D/g, "")
  .replace(/^0+/, "");

  let counter = 1;
  let valueFound = "notFound"

  const reversalString = Array
  .from(number.toString())
  .reverse()
  .reduce((acc, i, index, arr) => {
    if (counter == 2 && valueFound == "notFound" && (arr.length > 2)) {
      acc = acc + i + ',';
      valueFound = "found";
      counter = 0;
    } else if (counter === 3 && (arr.length != (index + 1))
    ) {
      acc = acc + i + '.'
      counter = 0
    } else {
      acc = acc + 1
    }

    counter++
    return acc
  }, "")

  let formatedMoney = Array.from(reversalString).reverse().join("")

  if (formatedMoney.length == 2) {
    formatedMoney = "0," + formatedMoney
  } else if (formatedMoney.length == 1) {
    formatedMoney = "0,0" + formatedMoney
  }
  return formatedMoney
}

console.log(useMoney(235235))

function useCpf(value) {
  return String(value)
  .replace(/\D/g, "")
  .slice(0, 11)
  .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "\$1.\$2.\$3-\$4")
}

console.log(useCpf(1424124124124))

function useCep(value) {
  return String(value)
  .replace(/\D/g, "")
  .slice(0, 8)
  .replace(/(\d{5})(\d)/, "\$1-\$2")
}

console.log(useCep(12345678))

function useResedentialPhone(value) {
  return String(value)
  .replace(/\D/g, "")
  .slice(0, 10)
  .replace(/(\d{2})(\d{4})(\d{4})/, "\$1 \$2-\$3")
}

console.log(useResedentialPhone(1232424543))

function useMobilePhone(value) {
  return String(value)
  .replace(/\D/g, "")
  .slice(0, 11)
  .replace(/(\d{2})(\d{5})(\d{4})/, "\$1 \$2-\$3")
}

console.log(useMobilePhone(12324245223243))

function useRg(value) {
  return String(value)
  .replace(/\D/g, "")
  .slice(0, 9)
  .replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, "\$1.\$2.\$3-\$4")
}

console.log(useRg(12123123123))