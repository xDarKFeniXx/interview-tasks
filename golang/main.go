package main

import (
	"fmt"

	"github.com/robteix/testmod/computedepth"
)


func main() {
	fmt.Println(computedepth.ComputeDepth(42))
	fmt.Println(computedepth.ComputeDepth(1))
	fmt.Println(computedepth.ComputeDepth(125))
	fmt.Println(computedepth.ComputeDepth(1234567890))
}
