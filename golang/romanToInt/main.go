package romanToInt

import (
	"slices"
	"strings"
)

func RomanToInt(s string) int {
	romans := map[string]int{
		"I": 1,
		"V": 5,
		"X": 10,
		"L": 50,
		"C": 100,
		"D": 500,
		"M": 1000,
	}
	arr := strings.Split(s, "")
	slices.Reverse(arr)
	var result int
	for i, val := range arr {
		var prevChar string
		if i == 0 {
			prevChar = ""
		} else {
			prevChar = arr[i-1]
		}
		if val == "I" && (prevChar == "V" || prevChar == "X") {
			result -= 1
		} else if val == "X" && (prevChar == "L" || prevChar == "C") {
			result -= 10
		} else if val == "C" && (prevChar == "D" || prevChar == "M") {
			result -= 100
		} else {
			result += romans[val]
		}
	}
	return result
}
