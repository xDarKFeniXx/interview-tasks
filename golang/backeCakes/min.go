package backecakes

func min(arr []int) int {
	result := arr[0]
	for _, v := range arr {
		if v < result {
			result = v
		}
	}
	return result
}
