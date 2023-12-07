package disemvowel

import "regexp"

func Disemvowel(s string) string {
    m:=regexp.MustCompile("(?i)[aeiou]")
    return m.ReplaceAllString(s, "")
}
