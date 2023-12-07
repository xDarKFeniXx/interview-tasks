package backecakes

func Cakes(recipe, available map[string]int) int {
	arr := make([]int, 0)
	for keyR, valR := range recipe {
		valAv, ok := available[keyR]
		if !ok {
			return 0
		}

		newVal := valAv / valR
		arr = append(arr, newVal)
	}
	result := min(arr)

	return result
}
