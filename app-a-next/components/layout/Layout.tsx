import { ReactNode } from "react";
import styles from './Layout.module.css';

type LayoutProps = {
    children: ReactNode;
};

function Layout({ children }: LayoutProps) {
    return (
        <div className={styles.container}>
            <main className={styles.content}>{children}</main>
        </div>
    );
}

export default Layout;