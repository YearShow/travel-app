import React, {FC} from "react"
import Favorites from "./Favorites"
import BackButton from "./BackButton";

import styles from './Header.module.scss'

const Header: FC = () => {
    return <div className={styles.wrapper} >
        <BackButton />
        <Favorites />
    </div>
}

export default Header