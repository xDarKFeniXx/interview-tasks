package computedepth


func ComputeDepth(n uint) uint {
    uniqueDigits := make(map[uint]bool)
    var count uint
    for len(uniqueDigits)!=10{
        val:=n*count
        for val > 0 {
            digit := val % 10
            uniqueDigits[digit] = true
            val /= 10
           }
           count++
    }
    
    return count-1
}
