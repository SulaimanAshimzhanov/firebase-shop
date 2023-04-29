



const LengthOfValue = (type: string, title: string, value: number) => 
    type === "max"
        ? `${title} must be less ${value} charecters`
        : `${title} must be less ${value} charecters`



export const FormsInstrument = {
    LengthOfValue
}