package duplicatescharinworld


func rmDuplicatesInworld(word string) string{
    result:=""
    for i, char:=range word {
        if i==0 {
            result+=string(char)
        } else {
            prevChar:=result[len(result)-1]
            if char != rune(prevChar) {
                result+=string(char)
            }
        }
    }
    return result
}

func Dup(arr []string) []string{
    result:=make([]string, len(arr))
    for i, word:=range arr{
        result[i]=rmDuplicatesInworld(word)
    }
    return result
}

