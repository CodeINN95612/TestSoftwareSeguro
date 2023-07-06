import { ReactNode } from "react";

import styles from "./Button.module.css"

type ButtonProps = {
    children: ReactNode;
    href?: string;
    onClick?: () => {};
    secondary?: boolean;
}

function Button({ children, href, onClick, secondary }: ButtonProps) {

    const style = secondary ? styles.button2 : styles.button;

    if (href) {
        return (
            <a className={style} href={href}>{children}</a>
        )
    }

    if (!onClick) {
        return (
            <button className={style} disabled>{children}</button>
        )
    }

    return (
        <button className={style} onClick={onClick}>{children}</button>
    );
}

export default Button;