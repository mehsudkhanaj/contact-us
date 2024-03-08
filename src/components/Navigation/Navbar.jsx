import styles from './Navigation.module.css';
import '../../App.css'
function Navbar() {
  return (
    <>
    <nav className={`${styles.navigation} container`}>

        <div className="logo">
        <img src="/images/logo.png" alt="logo" />
        </div>
        <ul>
            <li >About</li>
            <li >Home</li>
            <li >Contact</li>
            
        </ul>
    </nav>

        
      
    </>
  )
}

export default Navbar;
