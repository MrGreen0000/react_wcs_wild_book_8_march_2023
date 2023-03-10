import './WildersGrid.css';
import WilderCard from './WilderCard';


export default function WildersGrid({ wilders, fetchData }) {



    return (
        <main className="container">
            <h2>Wilders</h2>
            <section className="card-row">
                {wilders.map((wilder, index) => (
                    <WilderCard
                        key={index}
                        id={wilder.id}
                        name={wilder.name}
                        skills={wilder.skills}
                        fetchData={fetchData}
                    />
                ))}
            </section>
        </main>
    );
}
