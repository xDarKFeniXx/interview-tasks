function calcFontSize(container, str, min=1, max=1) {  
    function getTextWidth(text, fontFamily, fontSize) {
        const canvas = getTextWidthHeigth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
        const context = canvas.getContext("2d");
        context.fontFamily = fontFamily;
        context.fontSize=fontSize
        const {width, height} = context.measureText(text);
        return {width, height};
    }
    let substring = str.length+1<=100? str: str.slice(0, 99)
    let result=null
    const height=container.clientHeight
    const width=container.clientWidth
    const fontFamily = getComputedStyle(container).fontFamily
    if (min > height) return result
    
    for (let index = height; index > min; index--) {
        let currentMeasure=getTextWidthHeigth(substring, fontFamily, index)
        if(currentMeasure.width<width){
            result=index
            break
        }
        if(currentMeasure.height<height/2 && currentMeasure.width/2<width){
            result=index
            break
        }
        
    }
    return result
}