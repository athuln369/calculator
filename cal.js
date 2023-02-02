function displayContent(content) {
    dis.value +=
    content
}
function allClear() {
    dis.value=''
}
function evaluateExpr() {
    dis.value= eval
    (dis.value)
}
function ClearEnd() {
    dis.value=dis.value.slice(0,-1)
}