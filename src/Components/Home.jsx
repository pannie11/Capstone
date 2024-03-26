import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate();
    
    return (
        <div id='home'>
            <section id='content'>
                <h2>New Arrivals for Men and Women</h2>
                <button id='homepageButton' onClick={() => navigate('/products')}>Shop now</button>
            </section>
        </div>
    )
}