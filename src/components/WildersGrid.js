import wildersData from '../wildersData.js';
import WilderCard from './WilderCard.js';
import './WildersGrid.css'

export default function WildersGrid() {
    return (
        <main className="container">
            <h2>Wilders</h2>
            <section className="card-row">
                {wildersData.map((wilder, index) => (
                    <WilderCard
                        key={index}
                        name={wilder.name}
                        city={wilder.city}
                        skills={wilder.skills}
                    />
                ))}
            </section>
        </main>
    );
}