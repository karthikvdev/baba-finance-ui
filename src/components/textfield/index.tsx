import React, { InputHTMLAttributes } from "react"

type InputProps = {
    isError?: boolean
    errorMsg?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const TextField: React.FC<InputProps> = ({ errorMsg, isError, ...props }) => {
    return (
        <div>
            <input
                {...props}
            />
            {isError && <p>{errorMsg}</p>}
        </div>
    )
}