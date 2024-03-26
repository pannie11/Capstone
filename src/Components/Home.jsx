import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate();
    
    return (
        <div id='home'>
            <section id='content'>
                <h1>New Arrivals for Men and Women</h1>
                <button id='homepageButton' onClick={() => navigate('/products')}>Shop now</button>
            </section>
        </div>
    )
}