function useUpperCase(str) {
    const newStr = str[0].toUpperCase() + str.substr(1);
    return newStr
}

export default useUpperCase