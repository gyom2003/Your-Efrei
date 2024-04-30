import HeaderComponent from './pages/header';
import FooterComponent from './pages/footer';
import HomeComponent from './pages/homeComponent';


function Homepage() {
    return (
        <div>
            <HeaderComponent/>
            <HomeComponent/>
            <FooterComponent/>
        </div>
    )
}

export default Homepage;