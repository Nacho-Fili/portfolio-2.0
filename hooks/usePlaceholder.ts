import React, { useState, useRef, useCallback } from "react" 

interface Position {
    top?: number,
    bottom?: number,
    left?: number,
    right?: number,
}

interface PlaceholderHook {
    init: () => void,
    inputRef: React.Ref<HTMLInputElement | HTMLTextAreaElement>,
    spanRef: React.Ref<HTMLSpanElement>,
    getSpanPosition: (inputFocus: boolean, inputValue: string) => Position,
    getInputPosition: () => Position,
}

const usePlaceholder: () => PlaceholderHook = () => {
    const [spanWidth, setSpanWidth] = useState<number | undefined>(0)
    const spanRef = useRef<HTMLSpanElement>(null)

    const [inputHeight, setInputHeight] = useState<number | undefined>(0)
    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null)

    const init = () => {
        setSpanWidth(spanRef.current?.offsetWidth)
        setInputHeight(inputRef.current?.offsetHeight)
    }

    const getSpanPosition = (inputFocus: boolean, inputValue: string) => {
        if(inputFocus || inputValue.length) return { top: inputHeight && spanRef.current ? -inputHeight : 0 }
        else return { top: inputHeight && spanRef.current ? -inputHeight + spanRef.current?.offsetHeight/2 : 0, left: 10 }
    }

    const getInputPosition = useCallback(() => {
        return { left: spanWidth ? -spanWidth : 0 }
    }, [spanWidth])
    
    return {
        init,
        spanRef,
        inputRef,
        getSpanPosition,
        getInputPosition,
    }
}

export default usePlaceholder